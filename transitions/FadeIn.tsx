"use client"

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
};

const DEFAULT_DELAY = 0;
const DEFAULT_DURATION = 0.6;

export const FadeIn = ({
  children,
  className,
  delay = DEFAULT_DELAY,
  duration = DEFAULT_DURATION,
}: FadeInProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={{
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
