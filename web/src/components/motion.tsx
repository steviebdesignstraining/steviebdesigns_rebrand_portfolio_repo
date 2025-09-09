"use client";

import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & MotionProps;

export function MotionDiv(props: Props) {
  // Wrapper to avoid importing framer-motion directly in every file
  // and to make it tree-shakeable.
  return <motion.div {...props} />;
}


