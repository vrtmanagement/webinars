"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Monitor, ArrowRight } from "lucide-react";
import type { Webinar } from "@/types/webinar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatWebinarDate, formatPrice } from "@/utils/formatDate";
import { cn } from "@/utils/cn";

interface WebinarCardProps {
  webinar: Webinar;
  onClick: (webinar: Webinar) => void;
  index?: number;
}

function getStatusVariant(status: Webinar["status"]) {
  switch (status) {
    case "Live":
      return "live" as const;
    case "Completed":
      return "muted" as const;
    default:
      return "success" as const;
  }
}

export function WebinarCard({ webinar, onClick, index = 0 }: WebinarCardProps) {
  const isSoldOut = webinar.seatsRemaining === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(220,38,38,0.12)] hover:border-red-300 transition-all duration-300 h-full flex flex-col"
      onClick={() => onClick(webinar)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={webinar.coverImage}
          alt={webinar.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/20 to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge variant={getStatusVariant(webinar.status)}>
            {webinar.status}
          </Badge>
          {webinar.isFeatured && <Badge>Featured</Badge>}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Image
              src={webinar.speakerImage}
              alt={webinar.speakerName}
              width={36}
              height={36}
              className="rounded-full object-cover ring-2 ring-white/80 shrink-0"
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {webinar.speakerName}
              </p>
              <p className="text-xs text-white/70 truncate">
                {webinar.speakerDesignation}
              </p>
            </div>
          </div>
          <span
            className={cn(
              "shrink-0 rounded-full px-3 py-1 text-sm font-bold backdrop-blur-sm",
              webinar.price === 0
                ? "bg-emerald-500 text-white"
                : "bg-white text-zinc-900"
            )}
          >
            {formatPrice(webinar.price)}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="muted">{webinar.category}</Badge>
          <Badge variant="muted">{webinar.level}</Badge>
        </div>

        <h3 className="font-serif text-lg font-bold text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-2">
          {webinar.title}
        </h3>

        <p className="mt-2 text-[16px] text-zinc-500 line-clamp-2 flex-1 leading-relaxed">
          {webinar.description}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2.5 rounded-xl bg-zinc-50 p-3 text-sm text-zinc-600">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-red-600" />
            {formatWebinarDate(webinar.webinarDate)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-red-600" />
            {webinar.webinarTime}
          </span>
          <span className="flex items-center gap-1.5">
            <Monitor className="h-3.5 w-3.5 text-red-600" />
            Online
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-red-600" />
            {isSoldOut ? "Sold Out" : `${webinar.seatsRemaining} seats left`}
          </span>
        </div>

        <Button
          className="mt-5 w-full"
          size="sm"
          disabled={isSoldOut}
          onClick={(e) => {
            e.stopPropagation();
            onClick(webinar);
          }}
        >
          {isSoldOut ? "Sold Out" : "Register Now"}
          {!isSoldOut && <ArrowRight className="h-4 w-4" />}
        </Button>
      </div>
    </motion.article>
  );
}
