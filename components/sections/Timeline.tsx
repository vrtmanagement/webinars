"use client";

import { motion } from "framer-motion";
import { useWebinars } from "@/hooks/useWebinars";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { formatWebinarDate } from "@/utils/formatDate";
import { Spinner } from "@/components/ui/Spinner";

function getStatusVariant(status: string) {
  if (status === "Live") return "live" as const;
  if (status === "Completed") return "muted" as const;
  return "success" as const;
}

export function Timeline() {
  const { webinars, loading } = useWebinars();

  const sorted = [...webinars].sort(
    (a, b) => new Date(a.webinarDate).getTime() - new Date(b.webinarDate).getTime()
  );

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          label="Schedule"
          title="Upcoming Webinars Timeline"
          description="Track all upcoming, live, and completed sessions in one place."
        />

        {loading ? (
          <div className="flex justify-center mt-16">
            <Spinner size="lg" />
          </div>
        ) : (
          <div className="mt-16 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-400 to-transparent" />

            <div className="space-y-8">
              {sorted.map((webinar, i) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-4 top-6 h-4 w-4 rounded-full border-2 border-indigo-500 bg-white shadow-sm shadow-indigo-500/30" />

                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-indigo-600">
                        {formatWebinarDate(webinar.webinarDate)}
                      </span>
                      <Badge variant={getStatusVariant(webinar.status)}>
                        {webinar.status}
                      </Badge>
                      <Badge variant="muted">{webinar.category}</Badge>
                    </div>
                    <h3 className="text-lg font-bold">{webinar.title}</h3>
                    <p className="text-sm text-muted mt-1">
                      with {webinar.speakerName}
                    </p>
                    <p className="text-sm text-muted mt-3 line-clamp-2">
                      {webinar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
