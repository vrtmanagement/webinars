"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: "250+", label: "Webinars" },
  { value: "50K+", label: "Attendees" },
  { value: "120+", label: "Experts" },
  { value: "4.9", label: "Rating" },
];

const cards = [
  { title: "Live Webinar", color: "from-indigo-500 to-violet-600", rotate: -6, x: 0, y: 0 },
  { title: "AI", color: "from-violet-500 to-purple-600", rotate: 4, x: 40, y: -20 },
  { title: "Business", color: "from-blue-500 to-indigo-600", rotate: -3, x: -30, y: 30 },
  { title: "Leadership", color: "from-emerald-500 to-teal-600", rotate: 5, x: 50, y: 40 },
  { title: "Marketing", color: "from-pink-500 to-rose-600", rotate: -4, x: -20, y: 60 },
  { title: "Software Engineering", color: "from-amber-500 to-orange-600", rotate: 2, x: 30, y: 80 },
];

const badges = [
  { label: "Live Now", color: "bg-red-500", pulse: true },
  { label: "Certificate Included", color: "bg-indigo-600", pulse: false },
  { label: "Free Registration", color: "bg-emerald-600", pulse: false },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-indigo-100 via-violet-50 to-purple-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-6">
              <Sparkles className="h-4 w-4" />
              Premium Live Learning Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Learn From Industry Leaders Through{" "}
              <span className="gradient-text">Live Webinars</span>
            </h1>

            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              Join expert-led sessions designed to help professionals, founders,
              entrepreneurs, and students grow faster with practical knowledge and
              real-world insights.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => document.getElementById("webinars")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Webinars
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[480px] hidden lg:block">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`absolute left-1/2 top-1/2 w-56 rounded-2xl bg-gradient-to-br ${card.color} p-5 text-white shadow-xl cursor-default`}
                style={{
                  transform: `translate(calc(-50% + ${card.x}px), calc(-50% + ${card.y}px)) rotate(${card.rotate}deg)`,
                  zIndex: i,
                }}
              >
                <div className="text-xs font-medium opacity-80 mb-1">Category</div>
                <div className="text-lg font-bold">{card.title}</div>
                <div className="mt-3 h-1 w-8 rounded-full bg-white/40" />
              </motion.div>
            ))}

            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className={`absolute ${badge.color} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5`}
                style={{
                  top: `${15 + i * 25}%`,
                  right: `${5 + i * 8}%`,
                }}
              >
                {badge.pulse && (
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                )}
                {badge.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
