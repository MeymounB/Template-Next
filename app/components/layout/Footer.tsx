"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

const navigation = {
  main: [
    { name: "Documentation", href: "/docs" },
    { name: "Exemples", href: "/examples" },
    { name: "GitHub", href: "https://github.com/votre-repo" },
    { name: "Changelog", href: "/changelog" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/votre-repo",
      icon: "mdi:github",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/nextgeneration",
      icon: "mdi:twitter",
    },
    {
      name: "Discord",
      href: "https://discord.gg/votre-serveur",
      icon: "mdi:discord",
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <Icon icon={item.icon} className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center space-x-2">
          <Icon icon="logos:nextjs" className="h-5 w-5" />
          <Icon icon="logos:typescript-icon" className="h-5 w-5" />
          <Icon icon="logos:tailwindcss-icon" className="h-5 w-5" />
          <Icon icon="simple-icons:framer" className="h-5 w-5 text-white" />
        </div>

        <p className="mt-10 text-center text-xs leading-5 text-gray-400">
          &copy; {new Date().getFullYear()} Template Next Generation. Tous
          droits réservés.
        </p>
      </div>
    </footer>
  );
}
