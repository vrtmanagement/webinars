"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "How do I register for a webinar?",
    answer:
      "Browse our featured webinars, click on any session that interests you, and hit the Register button. You'll receive a confirmation email with the meeting link and calendar invite.",
  },
  {
    question: "Is it free to attend?",
    answer:
      "Many of our webinars are completely free. Some premium sessions with extended content or 1-on-1 access may have a fee, clearly displayed on each webinar card.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes! All attendees who participate in a live session receive a verified certificate of completion within 24 hours after the webinar ends.",
  },
  {
    question: "Can I watch the recording later?",
    answer:
      "Absolutely. Recordings are available for 30 days after the live session. Registered attendees receive an email with the recording link.",
  },
  {
    question: "Will there be live Q&A?",
    answer:
      "Every webinar includes a dedicated Q&A segment where you can ask questions directly to the speaker. Some sessions also offer extended office hours.",
  },
  {
    question: "Can I cancel my registration?",
    answer:
      "Yes, you can cancel up to 24 hours before the webinar starts. For paid sessions, full refunds are available up to 48 hours before the event.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about our webinars."
        />
        <div className="mt-12">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
