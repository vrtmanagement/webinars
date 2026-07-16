"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/utils/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AccordionItem {
  question: string;
  answer: string;
}

const faqItems: AccordionItem[] = [
  {
    question: "How do I register for a masterclass?",
    answer:
      "Browse the upcoming webinars below, choose the session that fits your challenge, and click Register Now. You’ll receive a confirmation email with joining details.",
  },
  {
    question: "Are these masterclasses really complimentary?",
    answer:
      "Yes. Our monthly executive masterclasses are complimentary and designed exclusively for ambitious business owners and leadership teams.",
  },
  {
    question: "Who hosts the sessions?",
    answer:
      "Sessions are hosted by Rajesh Tedla, Founder of VRT Management Group, LLC, with frameworks drawn from real executive consulting experience.",
  },
  {
    question: "Do I need to attend every month?",
    answer:
      "No. Each session is independent and focused on one growth challenge. Attend the months that match your current priorities.",
  },
  {
    question: "What happens after I attend?",
    answer:
      "Qualified participants may be invited to a complimentary 45-minute Executive Growth Strategy Session to assess goals, constraints, and practical next steps.",
  },
  {
    question: "What is VEGA© Premium?",
    answer:
      "VEGA© Premium Growth Accelerator is a selective, year-long implementation and executive mentoring experience for leaders ready to commit beyond learning.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-zinc-50">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          label="Questions"
          title="Frequently Asked Questions"
          description="Everything you need to know about our executive masterclasses."
        />

        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className={cn(
                  "rounded-2xl border bg-white overflow-hidden transition-all duration-300",
                  isOpen
                    ? "border-red-200 shadow-md shadow-red-600/5"
                    : "border-zinc-200 hover:border-zinc-300"
                )}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-semibold text-zinc-900 pr-2">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors",
                      isOpen
                        ? "bg-red-600 text-white"
                        : "bg-zinc-100 text-zinc-500"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div className="px-5 pb-5">
                        <div className="rounded-xl bg-zinc-50 px-4 py-3 border border-zinc-100">
                          <p className="text-[16px] text-zinc-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
