"use client";

import {
  motion,
  AnimatePresence as FramerAnimatePresence,
} from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export const MotionDiv: React.FC<HTMLMotionProps<"div">> = motion.div;
export const AnimatePresence = FramerAnimatePresence;
