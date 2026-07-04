"use client";

import { Video, Share2, Mail, Globe, Rss } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Webinars", href: "#webinars" },
  { label: "Categories", href: "#categories" },
];

const resources = [
  { label: "Blog", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Community", href: "#" },
  { label: "Events", href: "#" },
];

const support = [
  { label: "Help Center", href: "#" },
  { label: "Contact Us", href: "#contact" },
  { label: "FAQ", href: "#faq" },
  { label: "Status", href: "#" },
];

const socials = [
  { icon: Share2, href: "#", label: "Share" },
  { icon: Mail, href: "#", label: "Email" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: Rss, href: "#", label: "RSS" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600">
                <Video className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="text-lg font-bold">
                Webinar<span className="gradient-text">Pro</span>
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-6">
              Premium live webinars from industry leaders. Learn, connect, and grow with expert-led sessions designed for professionals.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 text-muted hover:text-indigo-600 hover:border-indigo-200 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 max-w-md w-full">
              <h4 className="font-semibold text-sm mb-2">Subscribe to our newsletter</h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-neutral-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex gap-6 text-sm text-muted">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            &copy; {new Date().getFullYear()} WebinarPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
