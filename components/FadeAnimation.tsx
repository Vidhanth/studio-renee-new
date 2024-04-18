"use client";

import { FadeInLeft } from "@/transitions/FadeInLeft";
import { FadeInLeftWhenVisible } from "@/transitions/FadeInLeftWhenVisible";
import { FadeInUp } from "@/transitions/FadeInUp";
import { FadeInUpWhenVisible } from "@/transitions/FadeInUpWhenVisible";
import { ReactNode } from "react";
import useWindowSize from "@rooks/use-window-size";

type FadeAnimationProps = {
  animateOnVisibility?: boolean;
  overrideDirection?: string;
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeAnimation({
  overrideDirection,
  animateOnVisibility = false,
  children,
  delay = 0.0,
  className,
}: FadeAnimationProps) {
  const { innerWidth } = useWindowSize();
  const isSmallScreen = (innerWidth || 0) < 768;

  if (animateOnVisibility) {
    if (
      (isSmallScreen && overrideDirection != "left") ||
      overrideDirection == "up"
    ) {
      return (
        <FadeInUpWhenVisible className={className} delay={delay}>
          {children}
        </FadeInUpWhenVisible>
      );
    }
    return (
      <FadeInLeftWhenVisible className={className} delay={delay}>
        {children}
      </FadeInLeftWhenVisible>
    );
  }
  if (
    (isSmallScreen && overrideDirection != "left") ||
    overrideDirection == "up"
  ) {
    return (
      <FadeInUp className={className} delay={delay}>
        {children}
      </FadeInUp>
    );
  }
  return (
    <FadeInLeft className={className} delay={delay}>
      {children}
    </FadeInLeft>
  );
}
