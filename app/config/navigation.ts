import { FooterNavigation, NavigationSection } from "@/types/navigation";

export const mainNavigation: NavigationSection[] = [
  {
    title: "Documentation",
    items: [
      {
        name: "Guide de démarrage",
        href: "/docs/getting-started",
        description: "Guide rapide pour démarrer un nouveau projet",
      },
      {
        name: "Architecture",
        href: "/docs/architecture",
        description: "Structure et organisation du code",
      },
      {
        name: "Composants",
        href: "/docs/components",
        description: "Bibliothèque de composants réutilisables",
      },
    ],
  },
  {
    title: "Ressources",
    items: [
      {
        name: "Templates",
        href: "/templates",
        description:
          "Templates prêts à l'emploi pour différents types de projets",
      },
      {
        name: "Boîte à outils",
        href: "/toolkit",
        description: "Outils et utilitaires pour le développement",
      },
    ],
  },
];

export const footerNavigation: FooterNavigation = {
  main: [
    { name: "Guide de démarrage", href: "/docs/getting-started" },
    { name: "Architecture", href: "/docs/architecture" },
    { name: "Composants", href: "/docs/components" },
    { name: "Templates", href: "/templates" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/next-generation-dev",
      icon: "mdi:github",
    },
    {
      name: "GitLab",
      href: "https://gitlab.next-generation.dev",
      icon: "mdi:gitlab",
    },
    {
      name: "Slack",
      href: "https://next-generation.slack.com",
      icon: "mdi:slack",
    },
  ],
  resources: [
    { name: "Documentation API", href: "/api-docs" },
    { name: "Guide de style", href: "/style-guide" },
    { name: "Changelog", href: "/changelog" },
    { name: "Wiki interne", href: "/wiki" },
  ],
};
