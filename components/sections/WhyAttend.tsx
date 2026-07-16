"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Wrench,
  Shield,
  Brain,
  Sparkles,
  LineChart,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const gains = [
  {
    icon: Compass,
    title: "Clear strategic direction",
    description: "Walk away knowing where to focus next, not just inspired.",
  },
  {
    icon: Wrench,
    title: "Practical frameworks",
    description: "Implementation tools you can apply the same week.",
  },
  {
    icon: Shield,
    title: "Leadership tools",
    description: "Methods to lead people, decisions, and accountability.",
  },
  {
    icon: Brain,
    title: "Better decision-making",
    description: "Processes that reduce guesswork under pressure.",
  },
  {
    icon: Sparkles,
    title: "Greater confidence",
    description: "Clarity and conviction for your next business move.",
  },
  {
    icon: LineChart,
    title: "Executive insights",
    description: "Lessons drawn from real consulting experience.",
  },
];

export function WhyAttend() {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-red-600/40 to-transparent hidden lg:block" />
      <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-red-600/[0.04] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              label="Outcomes"
              title="What You'll Gain"
              description="Leave with more than inspiration, and a clear sense of what to do next."
            />
            <div className="mt-8 hidden lg:block h-px w-24 bg-red-600" />
            <p className="mt-6 hidden lg:block text-[16px] text-zinc-500 leading-relaxed max-w-sm">
              Six outcomes designed for operators who need clarity they can act
              on immediately.
            </p>
          </div>

          <ol className="relative">
            <div className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-zinc-200 hidden sm:block" />
            {gains.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="group relative grid grid-cols-[auto_1fr] gap-5 sm:gap-7 py-6 sm:py-7 border-b border-zinc-200 last:border-b-0"
              >
                <div className="relative z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-[13px] font-semibold tracking-wide text-zinc-500 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0 pt-0.5">
                  <div className="flex items-start gap-3">
                    <item.icon className="mt-1 h-4 w-4 shrink-0 text-red-600 opacity-80" />
                    <div>
                      <h3 className="font-serif text-xl sm:text-[1.35rem] font-bold text-zinc-900 tracking-tight leading-snug group-hover:text-red-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[16px] text-zinc-500 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
