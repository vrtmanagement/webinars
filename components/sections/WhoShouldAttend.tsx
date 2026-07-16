"use client";

import { motion } from "framer-motion";
import {
  Users,
  Crown,
  Building2,
  Briefcase,
  Network,
  Home,
  TrendingUp,
} from "lucide-react";

const audience = [
  { icon: Users, label: "Founders" },
  { icon: Crown, label: "CEOs" },
  { icon: Building2, label: "Presidents" },
  { icon: Briefcase, label: "Business Owners" },
  { icon: Network, label: "Leadership Teams" },
  { icon: Home, label: "Second-Generation Family Businesses" },
  { icon: TrendingUp, label: "Growth-Oriented Companies" },
];

export function WhoShouldAttend() {
  return (
    <section className="section-pad relative overflow-hidden bg-white border-y border-zinc-200">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] font-serif text-[12rem] sm:text-[16rem] lg:text-[20rem] font-bold leading-none text-zinc-900 select-none flex items-center justify-center"
        aria-hidden
      >
        A
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
      <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-red-600/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 text-[16px] font-medium text-red-600">
            <span className="h-px w-6 bg-red-500" />
            Audience
            <span className="h-px w-6 bg-red-500" />
          </div>
          <h2 className="font-serif text-[1.85rem] sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.12] text-zinc-900">
            Who Should Attend?
          </h2>
          <p className="mt-5 text-[16px] sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            For leaders who want better businesses, not just bigger ones.
          </p>
        </motion.div>

        <ul className="mt-12 mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {audience.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative flex items-start gap-4 bg-zinc-50 pl-5 pr-5 py-5 border border-zinc-200 hover:border-red-300 hover:bg-red-50 transition-colors duration-300"
            >
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-600 opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-red-600 text-white">
                <item.icon className="h-[18px] w-[18px]" />
              </div>
              <div className="min-w-0 pt-0.5">
                <span className="block text-[12px] font-semibold tabular-nums text-red-600 mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block text-[16px] font-medium text-zinc-900 leading-snug">
                  {item.label}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-[15px] text-zinc-500 max-w-xl mx-auto"
        >
          If you lead people, make strategic decisions, and drive growth, this
          is for you.
        </motion.p>
      </div>
    </section>
  );
}
