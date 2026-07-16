"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  UserPlus,
  Flame,
  ClipboardCheck,
  Handshake,
  GitBranch,
  TrendingUp,
  Bot,
  MessageSquare,
  Workflow,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const topics = [
  {
    title: "Building a High-Performance Leadership Team",
    icon: Users,
  },
  {
    title: "Strategic Planning That Actually Gets Executed",
    icon: Target,
  },
  {
    title: "Hiring and Retaining Exceptional Talent",
    icon: UserPlus,
  },
  {
    title: "Scaling Without Burning Out",
    icon: Flame,
  },
  {
    title: "Improving Accountability Across Your Organization",
    icon: ClipboardCheck,
  },
  {
    title: "Building Trust Within Leadership Teams",
    icon: Handshake,
  },
  {
    title: "Succession Planning",
    icon: GitBranch,
  },
  {
    title: "Business Growth Strategy",
    icon: TrendingUp,
  },
  {
    title: "AI for Business Leaders",
    icon: Bot,
  },
  {
    title: "Communication That Drives Results",
    icon: MessageSquare,
  },
  {
    title: "Creating Scalable Business Processes",
    icon: Workflow,
  },
  {
    title: "Building a Culture of Ownership",
    icon: HeartHandshake,
  },
];

export function Topics() {
  return (
    <section id="topics" className="section-pad bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Topics"
          title="Every Month Covers a Different Growth Challenge"
          description="Independent, practical sessions on the challenges every growing business faces, ready to apply immediately."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -3 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:border-red-300 hover:shadow-md transition-all min-h-[120px]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                  <topic.icon className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-4 text-[16px] font-semibold text-zinc-800 leading-snug group-hover:text-red-700 transition-colors">
                {topic.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
