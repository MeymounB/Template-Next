// metadata.ts est le fichier de configuration pour le SEO de votre application

import { Metadata } from "next";

const title = "Template Next Generation - Un template moderne pour Next.js";
const description =
  "Un template Next.js moderne et performant avec TypeScript, TailwindCSS, et plus encore.";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://github.com/votre-repo";

export function getPageMetadata(path: string = ""): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    keywords: [
      // Framework et langages
      "next.js",
      "react",
      "typescript",
      "javascript",
      // Styles et UI
      "tailwindcss",
      "nextui",
      "framer-motion",
      "gsap",
      // Type de projet
      "template",
      "boilerplate",
      "starter",
      "modern web development",
      // Fonctionnalités
      "app router",
      "server components",
      "typescript template",
      "responsive design",
    ],
    authors: [
      {
        name: "Next Generation Team",
        url: baseUrl,
      },
    ],
    creator: "Next Generation Team",
    publisher: "Next Generation",
    icons: {
      icon: [
        {
          url: "/favicon.ico",
          sizes: "any",
        },
      ],
    },
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "Template Next Generation",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Template Next Generation - Un template moderne pour Next.js",
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@nextgeneration",
      site: "@nextgeneration",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      languages: {
        "fr-FR": path ? `${baseUrl}/${path}` : baseUrl,
      },
    },
    manifest: "/site.webmanifest",
    other: {
      generator: "Next.js",
      "application-name": "Template Next Generation",
      "apple-mobile-web-app-title": "Template Next Generation",
    },
  };
}

export const metadata = getPageMetadata();
