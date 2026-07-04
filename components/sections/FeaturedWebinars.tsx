"use client";

import { useState, useMemo } from "react";
import type { Webinar } from "@/types/webinar";
import { useWebinars } from "@/hooks/useWebinars";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WebinarCard } from "@/components/webinar/WebinarCard";
import { WebinarModal } from "@/components/webinar/WebinarModal";
import { WebinarCardSkeleton } from "@/components/ui/Skeleton";
import { Spinner } from "@/components/ui/Spinner";
import { EmptyState } from "@/components/ui/EmptyState";
import { ErrorState } from "@/components/ui/ErrorState";

export function FeaturedWebinars() {
  const { webinars, loading, error, refetch } = useWebinars();
  const [selected, setSelected] = useState<Webinar | null>(null);

  // Show ALL webinars — featured first, then newest (API returns createdAt desc)
  const displayed = useMemo(
    () =>
      [...webinars].sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      }),
    [webinars]
  );

  return (
    <section id="webinars" className="py-24 lg:py-32 bg-neutral-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Webinars"
          title="All Upcoming Webinars"
          description="Browse every session — including newly added webinars from our experts. Register now to secure your spot."
        />

        <div className="mt-16">
          {loading && (
            <div className="flex flex-col items-center gap-8">
              <Spinner size="lg" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {Array.from({ length: 6 }).map((_, i) => (
                  <WebinarCardSkeleton key={i} />
                ))}
              </div>
            </div>
          )}

          {error && !loading && (
            <ErrorState message={error} onRetry={refetch} />
          )}

          {!loading && !error && displayed.length === 0 && (
            <EmptyState onAction={refetch} />
          )}

          {!loading && !error && displayed.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayed.map((webinar, i) => (
                <WebinarCard
                  key={webinar.id}
                  webinar={webinar}
                  index={i}
                  onClick={setSelected}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <WebinarModal webinar={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
