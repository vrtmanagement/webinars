"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-zinc-950 text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-red-600" />
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.22)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl"
        >
          <p className="mb-6 inline-flex items-center gap-2 text-[16px] font-medium text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            Complimentary Monthly Executive Masterclass
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.1rem] font-bold tracking-tight leading-[1.12]">
            Every Great Business Hits a Growth Ceiling. The Best Leaders Know
            How to Break Through It.
          </h1>

          <p className="mt-6 text-xl sm:text-[1.35rem] font-medium text-red-400">
            Every Month, We Solve One of Them. Join Us.
          </p>

          <p className="mt-6 text-[16px] sm:text-lg text-white leading-relaxed max-w-3xl">
            A complimentary masterclass for ambitious owners building companies
            that scale with clarity, stronger leadership, and disciplined
            execution. Each month tackles one growth challenge, and you leave
            with frameworks you can apply immediately.
          </p>

          <p className="mt-8 text-[16px] text-white">
            Hosted by{" "}
            <span className="font-semibold">Rajesh Tedla</span>
            <span> · </span>
            Founder, VRT Management Group, LLC
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={() =>
                document.getElementById("webinars")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Register Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 text-white hover:bg-white/10 hover:border-white/40"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
