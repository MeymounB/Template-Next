import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.votre-site.fr";

// Fonction pour détecter toutes les pages statiques
async function getStaticPages() {
  const pages = [];
  const appDir = path.join(process.cwd(), "app");
  const currentDate = new Date().toISOString();

  // Patterns pour les fichiers à ignorer
  const ignorePatterns = [
    "**/layout.tsx",
    "**/loading.tsx",
    "**/error.tsx",
    "**/not-found.tsx",
    "**/api/**",
    "**/_*",
    "**/components/**",
    "**/lib/**",
    "**/utils/**",
    "**/hooks/**",
    "**/types/**",
    "**/styles/**",
    "**/public/**",
    "**/node_modules/**",
    "**/[**", // Ignorer toutes les routes dynamiques
  ];

  // Trouver tous les fichiers page.tsx
  const files = await glob("**/page.tsx", {
    cwd: appDir,
    ignore: ignorePatterns,
  });

  // Traiter les fichiers trouvés
  for (const file of files) {
    let route = file
      .replace(/\/page\.tsx$/, "")
      .replace(/^\([^)]+\)\//, "")
      .replace(/\[([^\]]+)\]/g, ":$1")
      .replace(/\\/g, "/")
      .replace(/\/+/g, "/");

    if (route.includes("(") || route.includes(")") || route.includes(":")) {
      continue;
    }

    route = route === "" ? "/" : `/${route}`;

    let priority = 0.7;
    let changefreq = "weekly";

    if (route === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (["/docs", "/components", "/examples"].includes(route)) {
      priority = 0.8;
      changefreq = "weekly";
    }

    if (!pages.some((p) => p.path === route)) {
      pages.push({
        path: route,
        priority,
        changefreq,
        lastmod: currentDate,
      });
    }
  }

  // Routes statiques importantes
  const importantRoutes = [
    { path: "/", priority: 1.0, changefreq: "daily", lastmod: currentDate },
    {
      path: "/docs",
      priority: 0.8,
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      path: "/components",
      priority: 0.8,
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      path: "/examples",
      priority: 0.8,
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      path: "/templates",
      priority: 0.8,
      changefreq: "weekly",
      lastmod: currentDate,
    },
    {
      path: "/changelog",
      priority: 0.7,
      changefreq: "weekly",
      lastmod: currentDate,
    },
  ];

  // Ajouter les routes importantes si non présentes
  for (const route of importantRoutes) {
    if (!pages.some((p) => p.path === route.path)) {
      pages.push(route);
    }
  }

  return pages;
}

// Fonction pour générer le XML de la sitemap
function generateSitemapXML(routes, isIndex = false) {
  if (isIndex) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE_URL}${route.path}"/>
  </url>`,
  )
  .join("\n")}
</urlset>`;
}

// Fonction pour générer le robots.txt
function generateRobotsTxt() {
  return `# Global rules
User-agent: *
Allow: /
Crawl-delay: 10

# Protection des routes techniques
Disallow: /api/*
Allow: /api/og

# Protection des routes de développement
Disallow: /_next/*
Disallow: /static/*
Disallow: /public/*
Disallow: /node_modules/*

# Ressources
Allow: /site.webmanifest
Allow: /favicon.ico
Allow: /apple-touch-icon.png
Allow: /api/og
Allow: /sitemap.xml
Allow: /sitemap-0.xml

# Host
Host: ${SITE_URL}

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-0.xml`;
}

// Fonction principale
async function generateSitemap() {
  try {
    console.log("📝 Génération des sitemaps et robots.txt...");
    console.log(`🌐 URL du site: ${SITE_URL}`);

    const staticPages = await getStaticPages();
    const sitemap = generateSitemapXML(staticPages);
    const sitemapIndex = generateSitemapXML(staticPages, true);

    const publicDir = path.join(process.cwd(), "public");
    fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
    fs.writeFileSync(path.join(publicDir, "sitemap-0.xml"), sitemapIndex);
    fs.writeFileSync(path.join(publicDir, "robots.txt"), generateRobotsTxt());

    console.log(
      `✅ Sitemaps et robots.txt générés avec succès ! ${staticPages.length} URLs incluses.`,
    );
    console.log(
      "📄 Routes détectées :",
      staticPages.map((r) => r.path).join("\n"),
    );
  } catch (error) {
    console.error("❌ Erreur lors de la génération:", error);
    process.exit(1);
  }
}

generateSitemap();
