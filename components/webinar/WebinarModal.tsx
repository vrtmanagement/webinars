"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  Users,
  Monitor,
  CheckCircle2,
  ListChecks,
  HelpCircle,
} from "lucide-react";
import type { Webinar } from "@/types/webinar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { formatWebinarDate, formatPrice } from "@/utils/formatDate";

interface WebinarModalProps {
  webinar: Webinar | null;
  onClose: () => void;
}

export function WebinarModal({ webinar, onClose }: WebinarModalProps) {
  useEffect(() => {
    if (webinar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [webinar]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {webinar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="relative h-56 sm:h-64">
              <Image
                src={webinar.coverImage}
                alt={webinar.title}
                fill
                className="object-cover"
                sizes="768px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex gap-2 mb-2">
                  <Badge variant={webinar.status === "Live" ? "live" : "default"}>
                    {webinar.status}
                  </Badge>
                  <Badge variant="muted">{webinar.category}</Badge>
                </div>
                <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white">
                  {webinar.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              <p className="text-muted leading-relaxed">{webinar.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Calendar, label: "Date", value: formatWebinarDate(webinar.webinarDate) },
                  { icon: Clock, label: "Time", value: webinar.webinarTime },
                  { icon: Monitor, label: "Duration", value: webinar.duration },
                  { icon: Users, label: "Seats", value: `${webinar.seatsRemaining} left` },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-xl bg-neutral-50 p-4">
                    <Icon className="h-4 w-4 text-[#c41e1e] mb-2" />
                    <p className="text-xs text-muted">{label}</p>
                    <p className="text-sm font-semibold mt-0.5">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-red-50">
                <Image
                  src={webinar.speakerImage}
                  alt={webinar.speakerName}
                  width={56}
                  height={56}
                  className="rounded-full object-cover ring-2 ring-red-200"
                />
                <div>
                  <p className="font-semibold">{webinar.speakerName}</p>
                  <p className="text-sm text-muted">{webinar.speakerDesignation}</p>
                </div>
              </div>

              {webinar.agenda.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 font-semibold mb-4">
                    <ListChecks className="h-5 w-5 text-[#c41e1e]" />
                    Agenda
                  </h3>
                  <ol className="space-y-2">
                    {webinar.agenda.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#c41e1e] text-xs font-semibold">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {webinar.requirements.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {webinar.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle2 className="h-4 w-4 text-[#c41e1e] shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {webinar.benefits.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {webinar.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {webinar.faqs.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 font-semibold mb-4">
                    <HelpCircle className="h-5 w-5 text-[#c41e1e]" />
                    FAQs
                  </h3>
                  <Accordion items={webinar.faqs} />
                </div>
              )}
            </div>

            <div className="sticky bottom-0 flex items-center justify-between gap-4 border-t border-neutral-200 bg-white p-6">
              <div>
                <p className="text-sm text-muted">Price</p>
                <p className="text-2xl font-bold gradient-text">
                  {formatPrice(webinar.price)}
                </p>
              </div>
              <Button
                size="lg"
                disabled={webinar.seatsRemaining === 0}
                onClick={() => window.open(webinar.registrationLink, "_blank")}
              >
                {webinar.seatsRemaining === 0 ? "Sold Out" : "Register Now"}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
