"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className={isCenter ? "text-center mx-auto max-w-2xl" : "max-w-xl"}
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
      <h2 className="font-serif text-[1.75rem] sm:text-3xl lg:text-[2.35rem] font-bold tracking-tight text-zinc-900 leading-[1.15]">
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
