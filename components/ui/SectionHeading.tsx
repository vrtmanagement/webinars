"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Keep the title on a single line (scales down on narrow screens). */
  singleLine?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
  singleLine = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className={cn(
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-xl",
        className
      )}
    >
      {label && (
        <div
          className={`mb-3 flex items-center gap-2.5 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span className="accent-dot" />
          <span className="text-[16px] font-medium text-red-600">{label}</span>
        </div>
      )}
      <h2
        className={cn(
          "font-serif font-bold tracking-tight text-zinc-900 leading-[1.15]",
          singleLine
            ? "whitespace-nowrap text-[clamp(1.05rem,3.8vw,2.35rem)]"
            : "text-[1.75rem] sm:text-3xl lg:text-[2.35rem]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] sm:text-lg text-zinc-500 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
