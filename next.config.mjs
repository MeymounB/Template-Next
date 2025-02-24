// next.config.mjs est le fichier de configuration pour Next.js

import bundleAnalyzer from "@next/bundle-analyzer";
import createJiti from "jiti";
import { fileURLToPath } from "url";
import { dirname } from "path";

const jiti = createJiti(fileURLToPath(import.meta.url));

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lottie.host",
        port: "",
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "dam.malt.com",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
  productionBrowserSourceMaps: true,

  // Redirections des anciennes URLs
  async redirects() {
    return [
      // Pages principales
      {
        source: "/2016/10/horaires-lieu.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/2016/10/maitre-instructeur.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/2016/10/body-taekwondo.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/2016/10/fftda.html",
        destination: "/",
        permanent: true,
      },

      // Blog et événements
      {
        source: "/2022/06/tournoi-d-argenteuil.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2021/12/telethon-2021.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2019/12/telethon-2019.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2018/06/stage-houlgate.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2021/07/felicitations-aux-nouveaux-diplomes.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2019/06/portes-ouvertes-sportives-a-argenteuil.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2018/07/maitre-wildried-est-6eme-dan.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2017/09/taekwondo-coree-du-sud-2017.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2018/07/open-de-rosny-sous-bois.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source:
          "/2017/12/championnats-departementaux-mutualises-cdt-78-95.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2019/07/2-etoiles-pour-le-mudo-club.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2018/07/championnats-idf-et-france-technique-2018.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2017/02/stage-de-preparation-au-passage-de-grade.html",
        destination: "/blog-evenements",
        permanent: true,
      },

      // Galerie
      {
        source: "/2016/11/galerie.html",
        destination: "/galerie",
        permanent: true,
      },
      {
        source: "/page-list/photos",
        destination: "/galerie",
        permanent: true,
      },

      // Tags et catégories
      {
        source: "/tag/body%20taekwondo",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/photos",
        destination: "/galerie",
        permanent: true,
      },
      {
        source: "/tag/competitions",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/tag/rencontre",
        destination: "/blog-evenements",
        permanent: true,
      },

      // Pages de pagination
      {
        source: "/page/:number",
        destination: "/blog-evenements",
        permanent: true,
      },

      // Forum des associations
      {
        source: "/2021/09/le-mudo-club-etait-au-forum-des-associations.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2020/09/le-mudo-club-est-au-forum-des-associations.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/2019/08/le-mudo-club-est-au-forum-des-associations.html",
        destination: "/blog-evenements",
        permanent: true,
      },

      // Autres redirections
      {
        source: "/2017/01/facebook.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/system/noframed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/top",
        destination: "/",
        permanent: true,
      },

      // Redirection du domaine over-blog
      {
        source: "/tag/:tag*",
        destination: "/blog-evenements",
        permanent: true,
      },

      // Redirections supplémentaires
      {
        source:
          "/2017/05/le-comite-departemental-de-taekwondo-du-val-d-oise-a-un-nouveau-president.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/top/2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/2017/09/le-mudo-club-est-au-forum-des-associations.html",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source:
          "/2020/04/photos-souvenir-du-championnat-departemental-du-val-d-oise-2019.html",
        destination: "/blog-evenements",
        permanent: true,
      },

      // Redirections des URLs over-blog
      {
        source: "/mudoclubargenteuil.over-blog.com/tag/body%20taekwondo",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mudoclubargenteuil.over-blog.com/tag/rencontre",
        destination: "/blog-evenements",
        permanent: true,
      },

      // Redirections génériques pour capturer toutes les URLs similaires
      {
        source: "/20:year(\\d{2})/:month(\\d{2})/:slug",
        destination: "/blog-evenements",
        permanent: true,
      },
      {
        source: "/top/:number*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/page-list/:slug*",
        destination: "/galerie",
        permanent: true,
      },
      {
        source: "/system/:slug*",
        destination: "/",
        permanent: true,
      },
    ];
  },

  experimental: {
    optimizePackageImports: [
      "@nextui-org/react",
      "@iconify/react",
      "framer-motion",
      "gsap",
      "popmotion",
      "usehooks-ts",
    ],
  },

  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
    NEXT_PUBLIC_BASE_URL: "https://www.mudoclubargenteuil.fr",
  },

  poweredByHeader: false,
  compress: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
