"use client";

import { motion } from "framer-motion";
import { Users, Target, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VegaMark } from "@/components/ui/VegaMark";

const pillars = [
  {
    icon: Users,
    title: "People",
    description: "Strengthen leadership, culture, and the teams that execute.",
  },
  {
    icon: Target,
    title: "Strategy",
    description: "Clarify direction and decisions that compound over time.",
  },
  {
    icon: Workflow,
    title: "Processes",
    description: "Build systems so growth doesn’t rely on heroic effort.",
  },
];

export function Philosophy() {
  return (
    <section className="section-pad bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Philosophy"
          title="Our Philosophy"
          description="Most companies chase growth. We build the systems that make it sustainable."
        />

        <p className="mt-6 text-center text-[16px] text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          At <VegaMark />, lasting success comes from transforming People,
          Strategy, and Processes, by consistently executing the right actions
          over time.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-8 text-center hover:bg-red-50/30 transition-colors"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-red-600 text-white">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-[16px] text-zinc-500 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center font-serif text-2xl sm:text-[1.75rem] font-bold text-zinc-900"
        >
          Growth Isn&apos;t an Event.{" "}
          <span className="text-red-600">Growth Is A Process©.</span>
        </motion.p>
      </div>
    </section>
  );
}
