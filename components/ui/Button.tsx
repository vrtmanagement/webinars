"use client";

import { cn } from "@/utils/cn";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-red-600 text-white shadow-[0_8px_24px_rgba(220,38,38,0.28)] hover:bg-red-700",
  secondary:
    "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 shadow-sm",
  ghost: "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100",
  outline: "border border-red-600/40 text-red-600 hover:bg-red-50",
};

const sizes = {
  sm: "px-5 py-2 text-[15px]",
  md: "px-6 py-2.5 text-[16px]",
  lg: "px-8 py-3.5 text-[16px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
