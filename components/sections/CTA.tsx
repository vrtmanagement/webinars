"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 px-8 py-16 sm:px-16 sm:py-20 text-center"
        >
          <div className="absolute inset-0 -z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          </div>

          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Ready to Join the Next Webinar?
          </h2>
          <p className="relative mt-4 text-lg text-indigo-100 max-w-xl mx-auto">
            Register today and start learning from industry experts.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="relative mt-8 bg-white text-indigo-700 hover:bg-indigo-50 border-0 shadow-xl"
            onClick={() => document.getElementById("webinars")?.scrollIntoView({ behavior: "smooth" })}
          >
            Browse Webinars
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
