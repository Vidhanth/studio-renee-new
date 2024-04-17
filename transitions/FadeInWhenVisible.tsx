"use client";

import { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type FadeInWhenVisibleProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
  onComplete?: () => void;
};

const DEFAULT_THRESHOLD = 0;
const DEFAULT_DELAY = 0.25;
const DEFAULT_DURATION = 0.4;

export const FadeInWhenVisible = ({
  children,
  className,
  threshold = DEFAULT_THRESHOLD,
  delay = DEFAULT_DELAY,
  duration = DEFAULT_DURATION,
  onComplete,
}: FadeInWhenVisibleProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration, delay }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={className}
      onAnimationComplete={onComplete}
    >
      {children}
    </motion.div>
  );
};
