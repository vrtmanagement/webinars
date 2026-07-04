import type { CreateWebinarPayload } from "@/types/webinar";

export const DEFAULT_COVER_IMAGE =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80";

export const DEFAULT_SPEAKER_IMAGE =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80";

function toBoolean(value: unknown, fallback = false): boolean {
  if (typeof value === "boolean") return value;
  if (value === "true") return true;
  if (value === "false") return false;
  return fallback;
}

function toNumber(value: unknown, fallback = 0): number {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map(String);
}

export function normalizeWebinarPayload(
  body: Record<string, unknown>
): CreateWebinarPayload {
  return {
    title: String(body.title ?? ""),
    slug: String(body.slug ?? ""),
    description: String(body.description ?? ""),
    coverImage: String(body.coverImage || DEFAULT_COVER_IMAGE),
    speakerName: String(body.speakerName ?? ""),
    speakerImage: String(body.speakerImage || DEFAULT_SPEAKER_IMAGE),
    speakerDesignation: String(body.speakerDesignation ?? ""),
    category: String(body.category ?? "General"),
    level: String(body.level ?? "All Levels"),
    webinarDate: String(body.webinarDate ?? ""),
    webinarTime: String(body.webinarTime ?? ""),
    duration: String(body.duration ?? "60 min"),
    meetingLink: String(body.meetingLink ?? ""),
    registrationLink: String(body.registrationLink ?? ""),
    price: toNumber(body.price),
    seats: toNumber(body.seats, 100),
    seatsRemaining: toNumber(body.seatsRemaining, toNumber(body.seats, 100)),
    agenda: toStringArray(body.agenda),
    requirements: toStringArray(body.requirements),
    benefits: toStringArray(body.benefits),
    faqs: Array.isArray(body.faqs)
      ? body.faqs.map((faq) => {
          const item = faq as Record<string, unknown>;
          return {
            question: String(item.question ?? ""),
            answer: String(item.answer ?? ""),
          };
        })
      : [],
    tags: toStringArray(body.tags),
    isFeatured: toBoolean(body.isFeatured, true),
    status: (["Upcoming", "Live", "Completed"].includes(String(body.status))
      ? String(body.status)
      : "Upcoming") as CreateWebinarPayload["status"],
  };
}
