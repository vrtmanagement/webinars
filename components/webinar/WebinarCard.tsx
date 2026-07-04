"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Monitor } from "lucide-react";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group gradient-border cursor-pointer"
      onClick={() => onClick(webinar)}
    >
      <div className="rounded-2xl overflow-hidden bg-white h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={webinar.coverImage}
            alt={webinar.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant={getStatusVariant(webinar.status)}>
              {webinar.status}
            </Badge>
            {webinar.isFeatured && <Badge>Featured</Badge>}
          </div>
          <div className="absolute bottom-3 right-3">
            <span
              className={cn(
                "rounded-full px-3 py-1 text-sm font-semibold backdrop-blur-sm",
                webinar.price === 0
                  ? "bg-emerald-500/90 text-white"
                  : "bg-white/90 text-foreground"
              )}
            >
              {formatPrice(webinar.price)}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="muted">{webinar.category}</Badge>
            <Badge variant="muted">{webinar.level}</Badge>
          </div>

          <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-600 transition-colors line-clamp-2">
            {webinar.title}
          </h3>

          <p className="mt-2 text-sm text-muted line-clamp-2 flex-1">
            {webinar.description}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Image
              src={webinar.speakerImage}
              alt={webinar.speakerName}
              width={36}
              height={36}
              className="rounded-full object-cover ring-2 ring-indigo-100"
            />
            <div>
              <p className="text-sm font-medium">{webinar.speakerName}</p>
              <p className="text-xs text-muted">{webinar.speakerDesignation}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatWebinarDate(webinar.webinarDate)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {webinar.webinarTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Monitor className="h-3.5 w-3.5" />
              Online
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
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
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
