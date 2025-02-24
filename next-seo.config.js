// next-seo.config.js est le fichier de configuration pour le SEO de Next.js

/** @type {import('next-seo').DefaultSeoProps} */
const SEO = {
  title: "Mudo Club Argenteuil - Taekwondo",
  titleTemplate: "%s | Mudo Club Argenteuil",
  defaultTitle: "Mudo Club Argenteuil - École de Taekwondo",
  description:
    "Depuis plus de vingt ans, le Mudo Club Argenteuil est une école de taekwondo familiale, animée par des bénévoles passionnés qui transmettent leur amour pour cet art martial avec dévouement et expertise.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.mudoclubargenteuil.fr",
    site_name: "Mudo Club Argenteuil",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Mudo Club Argenteuil - École de Taekwondo",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
    {
      name: "keywords",
      content: [
        "taekwondo argenteuil",
        "arts martiaux val d'oise",
        "club taekwondo 95",
        "baby taekwondo",
        "cours enfants taekwondo",
        "self défense féminine",
        "taekwondo seniors",
        "sport de combat",
      ].join(", "),
    },
  ],
  additionalLinkTags: [
    {
      rel: "canonical",
      href: "https://www.mudoclubargenteuil.fr",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      href: "/favicon-96x96.png",
      type: "image/png",
      sizes: "96x96",
    },
  ],
  robotsProps: {
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    noarchive: false,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
  noindex: false,
  nofollow: false,
};

export default SEO;
