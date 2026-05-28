"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode, ElementType } from "react";

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const MotionComponent = motion(as);

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: "-80px",
      }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionComponent>
  );
}
