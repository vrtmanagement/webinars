"use client";

import Image from "next/image";

const companies = [
  { name: "Google", slug: "google", color: "#4285F4" },
  { name: "Microsoft", slug: "microsoft", color: "#00A4EF" },
  { name: "Amazon", slug: "amazonaws", color: "#FF9900" },
  { name: "Stripe", slug: "stripe", color: "#635BFF" },
  { name: "Adobe", slug: "adobe", color: "#FF0000" },
  { name: "Meta", slug: "meta", color: "#0668E1" },
  { name: "Netflix", slug: "netflix", color: "#E50914" },
  { name: "Apple", slug: "apple", color: "#000000" },
];

export function TrustedCompanies() {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-16 border-y border-neutral-200 bg-white overflow-hidden">
      <p className="text-center text-sm font-medium text-muted mb-10 uppercase tracking-wider">
        Trusted by professionals at
      </p>
      <div className="relative">
        <div className="flex animate-marquee w-max gap-16 items-center">
          {doubled.map((company, i) => (
            <div
              key={`${company.slug}-${i}`}
              className="group flex items-center gap-3 shrink-0 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={`https://cdn.simpleicons.org/${company.slug}/888888`}
                alt={company.name}
                width={32}
                height={32}
                className="group-hover:hidden"
              />
              <Image
                src={`https://cdn.simpleicons.org/${company.slug}/${company.color.replace("#", "")}`}
                alt={company.name}
                width={32}
                height={32}
                className="hidden group-hover:block"
              />
              <span className="text-lg font-semibold text-neutral-400 group-hover:text-foreground transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
