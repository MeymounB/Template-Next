"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRef } from "react";

const technologies = [
  {
    name: "Next.js 14",
    description:
      "Le framework React moderne avec App Router et Server Components",
    icon: "logos:nextjs",
    link: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    description: "Typage statique pour un code plus robuste et maintenable",
    icon: "logos:typescript",
    link: "https://www.typescriptlang.org",
  },
  {
    name: "TailwindCSS",
    description: "Framework CSS utilitaire pour un développement rapide",
    icon: "logos:tailwindcss",
    link: "https://tailwindcss.com",
  },
  {
    name: "NextUI",
    description: "Composants UI modernes et accessibles",
    icon: "simple-icons:nextui",
    link: "https://nextui.org",
  },
  {
    name: "Framer Motion",
    description: "Bibliothèque d'animations puissante et intuitive",
    icon: "simple-icons:framer",
    link: "https://www.framer.com/motion",
  },
  {
    name: "GSAP",
    description: "Animations complexes et performances optimales",
    icon: "simple-icons:greensock",
    link: "https://greensock.com/gsap",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Stack Technique Moderne
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Les meilleures technologies pour développer des applications web
            performantes et maintenables.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {technologies.map((tech) => (
            <motion.a
              key={tech.name}
              variants={item}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm transition-colors hover:border-gray-700 hover:bg-gray-900/80"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/10">
                  <Icon icon={tech.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {tech.name}
                </h3>
              </div>
              <p className="mt-4 text-gray-400">{tech.description}</p>
              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
