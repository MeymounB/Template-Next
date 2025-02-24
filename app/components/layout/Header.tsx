"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Documentation", href: "/docs" },
  { name: "Exemples", href: "/examples" },
  { name: "Composants", href: "/components" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-gray-900/80 backdrop-blur-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 flex items-center space-x-2 p-1.5">
            <Icon icon="ph:code-bold" className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold text-white">
              Next Generation
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Icon icon="ph:list-bold" className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 transition duration-300 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            href="https://github.com/votre-repo"
            className="text-gray-300 transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:github" className="h-6 w-6" />
          </Link>
          <Link
            href="https://github.com/votre-repo/stargazers"
            className="flex items-center space-x-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <Icon icon="ph:star-fill" className="h-4 w-4" />
            <span>Star</span>
          </Link>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm" />
          <motion.div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-gray-900 px-6 py-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 flex items-center space-x-2 p-1.5"
              >
                <Icon icon="ph:code-bold" className="h-8 w-8 text-purple-400" />
                <span className="text-xl font-bold text-white">
                  Next Generation
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <Icon icon="ph:x-bold" className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base text-gray-300 hover:bg-gray-800 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="https://github.com/votre-repo"
                    className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-base text-gray-300 hover:bg-gray-800 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon icon="mdi:github" className="h-6 w-6" />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}
