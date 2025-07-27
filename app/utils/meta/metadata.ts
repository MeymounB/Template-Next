// metadata.ts est le fichier de configuration pour le SEO de votre application

import type { Metadata } from "next";

const title = "Template Next Generation - Un template moderne pour Next.js";
const description =
  "Un template Next.js moderne et performant avec TypeScript, TailwindCSS, et plus encore.";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.next-generation.dev";

export function getPageMetadata(path: string = ""): Metadata {
  const url = path ? `${baseUrl}/${path}` : baseUrl;

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
      apple: [
        {
          url: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Template Next Generation",
      images: [
        {
          url: `${baseUrl}/api/og`,
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
      images: [`${baseUrl}/api/og`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": url,
      },
    },
    manifest: "/site.webmanifest",
    other: {
      "application-name": "Template Next Generation",
      "apple-mobile-web-app-title": "Template Next Generation",
      "X-Robots-Tag":
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    verification: {
      google: "google-site-verification-code",
    },
  };
}

export const metadata = getPageMetadata();
