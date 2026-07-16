"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Webinars", href: "#webinars" },
  { label: "Topics", href: "#topics" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md",
        scrolled
          ? "border-b border-zinc-200 shadow-[0_1px_0_rgba(0,0,0,0.04)] py-2.5"
          : "border-b border-transparent py-3.5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="flex items-center group">
          <Image
            src="/vrt-logo.png"
            alt="VRT Management Group"
            width={260}
            height={84}
            className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply transition-transform group-hover:scale-[1.02]"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] font-medium text-zinc-600 hover:text-red-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            onClick={() =>
              document.getElementById("webinars")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Register
          </Button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-[#1a1512]"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-[#1a1512]"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-[#1a1512]"
          />
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-zinc-200 px-6 py-4 space-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-[16px] font-medium text-zinc-700 py-2 hover:text-red-600"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="w-full mt-1"
            onClick={() => {
              setMobileOpen(false);
              document.getElementById("webinars")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Register
          </Button>
        </motion.div>
      )}
    </header>
  );
}
