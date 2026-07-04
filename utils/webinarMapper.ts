import type { Webinar } from "@/types/webinar";
import type { WebinarDocument } from "@/models/Webinar";
import {
  DEFAULT_COVER_IMAGE,
  DEFAULT_SPEAKER_IMAGE,
} from "@/utils/normalizeWebinarPayload";

export function toWebinar(doc: WebinarDocument): Webinar {
  return {
    id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    description: doc.description,
    coverImage: doc.coverImage || DEFAULT_COVER_IMAGE,
    speakerName: doc.speakerName,
    speakerImage: doc.speakerImage || DEFAULT_SPEAKER_IMAGE,
    speakerDesignation: doc.speakerDesignation ?? "",
    webinarDate: doc.webinarDate,
    webinarTime: doc.webinarTime,
    duration: doc.duration ?? "60 min",
    category: doc.category ?? "General",
    level: doc.level ?? "All Levels",
    price: doc.price ?? 0,
    seats: doc.seats ?? 100,
    seatsRemaining: doc.seatsRemaining ?? 100,
    meetingLink: doc.meetingLink ?? "",
    registrationLink: doc.registrationLink ?? "",
    agenda: doc.agenda ?? [],
    requirements: doc.requirements ?? [],
    benefits: doc.benefits ?? [],
    faqs: doc.faqs ?? [],
    tags: doc.tags ?? [],
    isFeatured: doc.isFeatured ?? false,
    status: doc.status ?? "Upcoming",
  };
}
