"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { VegaMark } from "@/components/ui/VegaMark";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    color: "bg-[#0A66C2]",
    Icon: LinkedInIcon,
  },
  {
    label: "X",
    href: "https://x.com",
    color: "bg-[#7B5CFF]",
    Icon: XIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    color: "bg-[#1877F2]",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    color: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    Icon: InstagramIcon,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com",
    color: "bg-[#FF0000]",
    Icon: YouTubeIcon,
  },
];

function FooterHeading({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <h4
      className="mb-4 text-[16px] font-bold leading-none tracking-wide"
      style={{ color }}
    >
      {children}
    </h4>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 lg:gap-x-14">
          {/* Brand */}
          <div className="max-w-[280px]">
            <a href="#home" className="inline-block mb-4">
              <Image
                src="/vrt-logo.png"
                alt="VRT Management Group"
                width={320}
                height={110}
                className="h-[100px] sm:h-[110px] w-auto object-contain mix-blend-multiply"
                priority
              />
            </a>
            <p className="text-[16px] text-[#8a8a8a] leading-relaxed">
              From vision to scalable, profitable growth.
            </p>
          </div>

          {/* Company & Contact */}
          <div className="space-y-10">
            <div>
              <FooterHeading color="#e83e8c">Company</FooterHeading>
              <p className="text-[16px] text-[#6b6b6b] leading-relaxed">
                VRT Management Group, LLC
              </p>
              <p className="mt-1 text-[16px] text-[#8a8a8a] leading-relaxed">
                Empowering Growth Through Proven Systems
              </p>
            </div>

            <div>
              <FooterHeading color="#e8a017">Contact</FooterHeading>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+12033041918"
                    className="inline-flex items-center gap-2.5 text-[16px] text-[#6b6b6b] hover:text-[#c41e1e] transition-colors"
                  >
                    <Phone className="h-[18px] w-[18px] shrink-0 text-[#3b82f6]" />
                    +1-203-304-1918
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:coachrajesh@vrt9.com"
                    className="inline-flex items-center gap-2.5 text-[16px] text-[#6b6b6b] hover:text-[#c41e1e] transition-colors break-all"
                  >
                    <Mail className="h-[18px] w-[18px] shrink-0 text-[#e83e8c]" />
                    coachrajesh@vrt9.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vrt9.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[16px] text-[#6b6b6b] hover:text-[#c41e1e] transition-colors"
                  >
                    <span className="font-medium text-[#c41e1e]">Web</span>
                    www.vrt9.net
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div>
            <FooterHeading color="#4da3ff">Social Media</FooterHeading>
            <ul className="space-y-3.5">
              {socials.map(({ label, href, color, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3.5 text-[16px] text-[#6b6b6b] hover:text-foreground transition-colors"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] ${color}`}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <FooterHeading color="#e8a017">Locations</FooterHeading>
            <div className="space-y-8">
              <div>
                <p className="mb-2 text-[16px] font-bold text-[#2a2a2a]">
                  Botsford, CT
                </p>
                <p className="text-[16px] text-[#8a8a8a] leading-[1.55]">
                  1 Botsford Hill Road
                  <br />
                  PO BOX 150
                  <br />
                  Botsford, CT 06404
                </p>
                <a
                  href="tel:+12033041918"
                  className="mt-2.5 inline-flex items-center gap-2.5 text-[16px] text-[#6b6b6b] hover:text-[#c41e1e] transition-colors"
                >
                  <Phone className="h-[18px] w-[18px] shrink-0 text-[#3b82f6]" />
                  +1-203-304-1918
                </a>
              </div>

              <div>
                <p className="mb-2 text-[16px] font-bold text-[#2a2a2a]">
                  Hyderabad, India
                </p>
                <p className="text-[16px] text-[#8a8a8a] leading-relaxed">
                  GCC (Global Capability Center)
                </p>
                <a
                  href="tel:+12033041918"
                  className="mt-2.5 inline-flex items-center gap-2.5 text-[16px] text-[#6b6b6b] hover:text-[#c41e1e] transition-colors"
                >
                  <Phone className="h-[18px] w-[18px] shrink-0 text-[#3b82f6]" />
                  +1-203-304-1918
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#e8e8e8]">
          <p className="text-[16px] text-[#9a9a9a]">
            <sup>©</sup> {new Date().getFullYear()} <VegaMark />, Visionary
            Entrepreneurs Growth Accelerator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
