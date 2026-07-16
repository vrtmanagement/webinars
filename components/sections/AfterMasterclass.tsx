"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Users,
  Target,
  Crown,
  ClipboardCheck,
  LineChart,
  Network,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { VegaMark } from "@/components/ui/VegaMark";

const sessionSteps = [
  { before: "Clarify your goals and growth stage." },
  { before: "Identify your biggest opportunities and constraints." },
  { before: "Get practical next steps, and see if ", vega: true, after: " is a fit." },
];

const premiumIncludes = [
  { icon: Users, label: "Executive mentoring and coaching" },
  { icon: Target, label: "Strategic planning and execution support" },
  { icon: Crown, label: "Leadership development" },
  { icon: ClipboardCheck, label: "Accountability and implementation reviews" },
  { icon: LineChart, label: "Business assessments and growth roadmaps" },
  { icon: Network, label: "Proven frameworks and a peer community" },
];

export function AfterMasterclass() {
  return (
    <section className="section-pad bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              label="Next Step"
              title="What Happens After the Masterclass?"
              description="Learning creates awareness. Implementation creates results."
              className="max-w-none"
              singleLine
            />
            <p className="mt-5 text-[16px] text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              Qualified participants may be invited to a complimentary 45-minute
              Executive Growth Strategy Session, focused on your business and
              valuable whether or not you join a program.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 border-y border-zinc-200 md:border-y-0">
            {sessionSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative px-2 py-8 md:px-8 md:py-2 md:border-l md:first:border-l-0 border-zinc-200 border-b last:border-b-0 md:border-b-0"
              >
                <span className="font-serif text-5xl sm:text-6xl font-bold text-red-600/15 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[16px] text-zinc-700 leading-relaxed max-w-xs">
                  {step.vega ? (
                    <>
                      {step.before}
                      <VegaMark />
                      {step.after}
                    </>
                  ) : (
                    step.before
                  )}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <p className="inline-flex items-center gap-2.5 rounded-md border border-red-200 bg-red-50 px-5 py-3 text-[16px] font-medium text-red-700">
              <Sparkles className="h-4 w-4 text-red-600 shrink-0" />
              Complimentary 45-minute Executive Growth Strategy Session
            </p>
          </motion.div>
        </div>
      </div>

      {/* Invitation / Premium Experience — previous style, light bg */}
      <div className="relative mt-20 w-full overflow-hidden bg-white border-y border-zinc-200">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] font-serif text-[12rem] sm:text-[16rem] lg:text-[20rem] font-bold leading-none text-zinc-900 select-none flex items-center justify-center"
          aria-hidden
        >
          V
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
        <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-red-600/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 text-[16px] font-medium text-red-600">
              <span className="h-px w-6 bg-red-500" />
              An Invitation, Not a Sales Pitch
              <span className="h-px w-6 bg-red-500" />
            </div>
            <h3 className="font-serif font-bold tracking-tight leading-[1.12] text-zinc-900 whitespace-nowrap text-[clamp(1.15rem,4vw,2.75rem)]">
              The <VegaMark /> Premium Experience
            </h3>
            <p className="mt-5 text-[16px] sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
              <VegaMark /> is selective. Aligned, committed owners may be
              invited to the <VegaMark /> Premium Growth Accelerator, a
              year-long mentoring experience to build lasting value, not a
              business that depends entirely on you.
            </p>
          </motion.div>

          <ul className="mt-12 mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {premiumIncludes.map((item, i) => (
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

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("webinars")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Reserve My Seat
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <p className="text-[15px] text-zinc-500">
              Begin with the masterclass. The invitation follows if
              there&apos;s alignment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
