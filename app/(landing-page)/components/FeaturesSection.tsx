"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    name: "Architecture Optimisée",
    description:
      "Structure de projet optimisée pour les applications professionnelles avec une séparation claire des responsabilités.",
    icon: "ph:cube-bold",
  },
  {
    name: "Composants Réutilisables",
    description:
      "Bibliothèque de composants TypeScript prêts à l'emploi, testés et documentés pour accélérer le développement.",
    icon: "ph:squares-four-bold",
  },
  {
    name: "Sécurité Intégrée",
    description:
      "Configurations de sécurité pré-configurées et meilleures pratiques implémentées par défaut.",
    icon: "ph:shield-check-bold",
  },
  {
    name: "Performance",
    description:
      "Optimisations de performance intégrées : images, polices, mise en cache et bundling optimisés.",
    icon: "ph:chart-line-up-bold",
  },
  {
    name: "Tests Automatisés",
    description:
      "Configuration complète des tests avec Jest et Testing Library, incluant des exemples de tests.",
    icon: "ph:test-tube-bold",
  },
  {
    name: "CI/CD",
    description:
      "Pipelines CI/CD préconfigurés pour GitLab et GitHub Actions avec déploiement automatisé.",
    icon: "ph:git-branch-bold",
  },
];

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Tout ce dont vous avez besoin
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Un template complet avec toutes les fonctionnalités nécessaires pour
            vos projets professionnels.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative pl-16"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <Icon
                      icon={feature.icon}
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
