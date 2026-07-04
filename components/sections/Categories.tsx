"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Crown,
  Megaphone,
  DollarSign,
  Code,
  Briefcase,
  Cloud,
  Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  { icon: Brain, name: "AI", color: "from-violet-500 to-purple-600", count: 42 },
  { icon: Crown, name: "Leadership", color: "from-amber-500 to-orange-600", count: 28 },
  { icon: Megaphone, name: "Marketing", color: "from-pink-500 to-rose-600", count: 35 },
  { icon: DollarSign, name: "Finance", color: "from-emerald-500 to-green-600", count: 22 },
  { icon: Code, name: "Software", color: "from-blue-500 to-indigo-600", count: 48 },
  { icon: Briefcase, name: "Business", color: "from-cyan-500 to-blue-600", count: 31 },
  { icon: Cloud, name: "Cloud", color: "from-sky-500 to-blue-600", count: 26 },
  { icon: Shield, name: "Cyber Security", color: "from-red-500 to-orange-600", count: 18 },
];

export function Categories() {
  return (
    <section id="categories" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Explore"
          title="Webinar Categories"
          description="Browse sessions across diverse topics tailored to every professional journey."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 text-left hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
              onClick={() => document.getElementById("webinars")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-white mb-4 group-hover:scale-110 transition-transform`}
              >
                <cat.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{cat.name}</h3>
              <p className="text-sm text-muted mt-1">{cat.count} webinars</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
