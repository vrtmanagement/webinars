"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Network,
  MessageSquare,
  Award,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: GraduationCap,
    title: "Learn from Experts",
    description: "Gain insights directly from industry leaders and practitioners at the top of their fields.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Connect with like-minded professionals, founders, and peers from around the world.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: MessageSquare,
    title: "Live Q&A",
    description: "Ask questions in real-time and get personalized answers from expert speakers.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Earn verified certificates to showcase your continuous learning and professional growth.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Acquire skills and knowledge that directly accelerate your career trajectory.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Lightbulb,
    title: "Latest Industry Trends",
    description: "Stay ahead with cutting-edge topics, tools, and strategies shaping your industry.",
    gradient: "from-purple-500 to-indigo-600",
  },
];

export function WhyAttend() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Benefits"
          title="Why Attend Our Webinars"
          description="Every session is designed to deliver maximum value for your time and career."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${reason.gradient} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform`}
              >
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
