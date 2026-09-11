"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function MotionWrapper({
  children,
  delay = 0,
  className,
  direction = "up",
}: MotionWrapperProps) {
  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 24 };
      case "down":
        return { opacity: 0, y: -24 };
      case "left":
        return { opacity: 0, x: 24 };
      case "right":
        return { opacity: 0, x: -24 };
      case "none":
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialOffset()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
