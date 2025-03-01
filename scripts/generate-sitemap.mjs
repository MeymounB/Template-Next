import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DOMAIN = "https://www.mudoclubargenteuil.fr";

const ROUTES = [
  "/",
  "/tarifs",
  "/contact",
  "/mentions-legales",
];

function generateSitemapXML() {
  // Sitemap principal (sitemap-0.xml)
  const mainSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${ROUTES.map(
    (route) => `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
    <xhtml:link 
      rel="alternate" 
      hreflang="fr-FR" 
      href="${DOMAIN}${route}"/>
  </url>`,
  ).join("")}
</urlset>`;

  fs.writeFileSync(
    path.join(process.cwd(), "public", "sitemap-0.xml"),
    mainSitemap,
  );

  // Sitemap index
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap-0.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

  fs.writeFileSync(
    path.join(process.cwd(), "public", "sitemap.xml"),
    sitemapIndex,
  );

  const robotsTxt = `# *
User-agent: *
Allow: /
Disallow: /api
Disallow: /404
Disallow: /500
Disallow: /_next
Disallow: /static
Disallow: /*.json$
Disallow: /*.js$
Disallow: /*.css$

# Host
Host: https://www.tonsite.fr

# Sitemaps
Sitemap: ${DOMAIN}/sitemap.xml

# Crawl-delay
Crawl-delay: 10

# Cache
Cache-Control: max-age=3600
`;

  fs.writeFileSync(
    path.join(process.cwd(), "public", "robots.txt"),
    robotsTxt,
  );

  console.log("✅ Sitemap files and robots.txt generated successfully!");
}

generateSitemapXML();
