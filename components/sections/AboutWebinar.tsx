"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users2, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    icon: Lightbulb,
    text: "Growth isn’t one magic fix, every stage brings new challenges.",
  },
  {
    icon: Users2,
    text: "Different leaders need different answers at different times.",
  },
  {
    icon: Rocket,
    text: "Each month we solve one critical challenge with practical frameworks you can use right away.",
  },
];

export function AboutWebinar() {
  return (
    <section id="about" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-red-600/[0.04] blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <SectionHeading
            label="Why We Exist"
            title="Why These Masterclasses Exist"
            description="We help entrepreneurs solve one critical growth challenge at a time, with clarity they can act on immediately."
            align="left"
            className="max-w-none"
            singleLine
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-6 shadow-sm hover:border-red-200 hover:shadow-md transition-all"
            >
              <span className="absolute top-4 right-5 font-serif text-5xl font-bold text-zinc-100 group-hover:text-red-50 transition-colors select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/20">
                <point.icon className="h-5 w-5" />
              </div>
              <p className="relative text-[16px] text-zinc-600 leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
