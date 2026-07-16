"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.2)_0%,_transparent_55%)]" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl px-6 lg:px-8 py-20 sm:py-24 text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight">
            Ready to Break Through Your Growth Ceiling?
          </h2>
          <p className="mt-4 text-[16px] sm:text-lg text-zinc-400 max-w-xl mx-auto">
            Reserve your seat in this month&apos;s complimentary masterclass.
          </p>
          <Button
            size="lg"
            className="mt-8"
            onClick={() =>
              document.getElementById("webinars")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Register Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
