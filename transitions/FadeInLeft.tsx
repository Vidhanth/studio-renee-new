"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeInLeftProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  distance?: number;
  duration?: number;
};

const DEFAULT_DELAY = 0;
const DEFAULT_DURATION = 0.6;
const DEFAULT_DISTANCE = 10;

export const FadeInLeft = ({
  children,
  className,
  delay = DEFAULT_DELAY,
  duration = DEFAULT_DURATION,
  distance = DEFAULT_DISTANCE,
}: FadeInLeftProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={{
        hidden: { opacity: 0, translateX: -distance },
        enter: { opacity: 1, translateX: 0 },
        exit: { opacity: 0, translateX: -distance },
      }}
      transition={{ type: "linear", duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
