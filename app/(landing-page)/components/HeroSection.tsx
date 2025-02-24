"use client";

import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ y, scale }}
    >
      {/* Gradient orbs avec animation */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-0 h-[50rem] w-[50rem] rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-3xl"
        animate={{
          x: [-20, 20],
          y: [-20, 20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 top-40 h-[50rem] w-[50rem] rounded-full bg-gradient-to-bl from-indigo-600/30 to-purple-600/30 blur-3xl"
        animate={{
          x: [20, -20],
          y: [20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            className="mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-gray-700/50 bg-gray-900/50 px-7 py-2 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Icon icon="ph:code-bold" className="h-5 w-5 text-purple-400" />
            <span className="text-sm text-gray-300">
              Template Next Generation
            </span>
          </motion.div>

          <motion.h1
            className="relative bg-gradient-to-b from-white to-gray-400 bg-clip-text text-5xl font-bold text-transparent sm:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Template Interne
            <br />
            Next Generation
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Démarrez rapidement vos projets clients avec notre template optimisé
            pour la production. Inclut toutes nos meilleures pratiques et
            configurations.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/docs/getting-started"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-purple-600 px-6 py-3 text-white transition-transform hover:scale-105"
            >
              <span>Guide de démarrage</span>
              <Icon
                icon="ph:arrow-right-bold"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600"
                initial={false}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-gray-300 transition-colors hover:border-gray-600 hover:text-white"
            >
              <Icon icon="ph:stack-bold" className="h-4 w-4" />
              <span>Voir les templates</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
