"use client";

import { motion } from "framer-motion";
import {
  Video,
  Users,
  MessageCircle,
  FolderKanban,
  PlayCircle,
  Award,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  { icon: Video, text: "Live interactive sessions with real-time engagement" },
  { icon: Users, text: "Expert speakers from top companies worldwide" },
  { icon: MessageCircle, text: "Live Q&A with speakers and panelists" },
  { icon: FolderKanban, text: "Real-world projects and case studies" },
  { icon: PlayCircle, text: "Session recordings available after the event" },
  { icon: Award, text: "Certificates of completion for all attendees" },
];

export function AboutWebinar() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-100 via-violet-50 to-purple-100" />
              <div className="absolute inset-4 rounded-2xl bg-white shadow-2xl shadow-indigo-500/10 p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  {[Video, Users, MessageCircle, Award].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-indigo-50 transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                        <Icon className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="h-2 flex-1 rounded-full bg-neutral-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                          style={{ width: `${70 + i * 7}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-4 text-white shadow-lg"
              >
                <Award className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              label="About"
              title="What Are Our Webinars?"
              description="Our webinars are carefully curated live learning experiences designed to deliver actionable insights from the world's best practitioners."
              align="left"
            />

            <ul className="mt-10 space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-muted leading-relaxed">{feature.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
