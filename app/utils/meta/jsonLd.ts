// app/meta/jsonLd.ts est le fichier de configuration pour le JSON-LD de votre application

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Template Next Generation",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  url: "https://github.com/votre-repo",
  description:
    "Un template Next.js moderne et performant avec TypeScript, TailwindCSS, et plus encore.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  author: {
    "@type": "Organization",
    name: "Next Generation Team",
  },
  programmingLanguage: ["TypeScript", "JavaScript"],
  softwareVersion: "1.0.0",
  keywords:
    "next.js, react, typescript, tailwindcss, template, nextui, framer-motion",
  about: {
    "@type": "Thing",
    name: "Web Development Framework Template",
    description: "Un template moderne pour le développement web avec Next.js",
  },
  featureList: [
    "Next.js 14",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "GSAP",
    "NextUI",
  ],
  requirements: {
    "@type": "TechnicalRequirement",
    name: "Node.js",
    minVersion: "18.17.0",
  },
};
