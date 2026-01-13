"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeInUpProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  distance?: number;
  duration?: number;
};

const DEFAULT_DELAY = 0;
const DEFAULT_DURATION = 0.4;
const DEFAULT_DISTANCE = 10;

export const FadeInUp = ({
  children,
  className,
  delay = DEFAULT_DELAY,
  duration = DEFAULT_DURATION,
  distance = DEFAULT_DISTANCE,
}: FadeInUpProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={{
        hidden: { opacity: 0, translateY: distance },
        enter: { opacity: 1, translateY: 0 },
        exit: { opacity: 0, translateY: distance },
      }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
