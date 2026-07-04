"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Jessica Martinez",
    company: "Google",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    review:
      "The AI product webinar completely transformed how our team approaches building ML features. Sarah's insights were immediately actionable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Stripe",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    review:
      "Best webinar platform I've used. The quality of speakers, production value, and interactive Q&A sessions are unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Microsoft",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    review:
      "I've attended 15+ webinars here and each one delivered genuine value. The certificates also helped me during my performance review.",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    company: "Amazon",
    photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80",
    review:
      "The leadership sessions gave me frameworks I still use daily. Networking with other attendees led to two meaningful professional connections.",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-24 lg:py-32 bg-neutral-50/50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Attendees Say"
          description="Join thousands of professionals who have transformed their careers through our webinars."
        />

        <div className="mt-16 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 shadow-sm"
            >
              <Quote className="h-10 w-10 text-indigo-200 mb-6" />
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                &ldquo;{t.review}&rdquo;
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover ring-2 ring-indigo-100"
                  />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted">{t.company}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-indigo-600" : "w-2 bg-neutral-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
