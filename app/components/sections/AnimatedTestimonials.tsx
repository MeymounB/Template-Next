"use client";

import { MdiChevronLeft } from "@/assets/icons/mdi-chevron-left";
import { MdiChevronRight } from "@/assets/icons/mdi-chevron-right";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback, useLayoutEffect } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";

// Créer un hook isomorphique qui utilise useLayoutEffect côté client et useEffect côté serveur
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [rotations] = useState(() =>
    testimonials.map(() => Math.floor(Math.random() * 21) - 10),
  );

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  return (
    <section className="relative w-full">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
        <div className="w-full px-8 md:px-0">
          <div className="relative mx-auto aspect-square w-[92%] max-w-md sm:w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={
                    mounted
                      ? {
                          opacity: 0,
                          scale: 0.9,
                          z: -100,
                          rotate: rotations[index],
                        }
                      : undefined
                  }
                  animate={
                    mounted
                      ? {
                          opacity: isActive(index) ? 1 : 0.7,
                          scale: isActive(index) ? 1 : 0.95,
                          z: isActive(index) ? 0 : -100,
                          rotate: isActive(index) ? 0 : rotations[index],
                          zIndex: isActive(index)
                            ? 10
                            : testimonials.length + 2 - index,
                          y: isActive(index) ? [0, -80, 0] : 0,
                        }
                      : undefined
                  }
                  exit={
                    mounted
                      ? {
                          opacity: 0,
                          scale: 0.9,
                          z: 100,
                          rotate: rotations[index],
                        }
                      : undefined
                  }
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-12">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote}
            </p>
          </motion.div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <button
                title="Précédent"
                onClick={handlePrev}
                className="group rounded-full border-1 border-primary p-2 transition-all duration-200 hover:bg-primary hover:text-white"
              >
                <MdiChevronLeft className="h-6 w-6 text-primary transition-all duration-200 group-hover:text-white" />
              </button>
              <button
                title="Suivant"
                onClick={handleNext}
                className="group rounded-full border-1 border-primary p-2 transition-all duration-200 hover:bg-primary hover:text-white"
              >
                <MdiChevronRight className="h-6 w-6 text-primary transition-all duration-200 group-hover:text-white" />
              </button>
            </div>
            <PrimaryButton
              navigateTo="https://g.page/r/Ca-7l7tD63j0EAE/review"
              text="Ajouter un avis Google"
              variant="black"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
