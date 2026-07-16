import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VEGA© Executive Masterclass, VRT Management Group",
  description:
    "Complimentary monthly executive masterclasses for ambitious business owners. Practical frameworks for leadership, strategy, hiring, AI, and scalable growth. Hosted by Rajesh Tedla.",
  keywords: [
    "executive masterclass",
    "business growth",
    "VEGA",
    "VRT Management Group",
    "leadership webinar",
    "Rajesh Tedla",
  ],
  openGraph: {
    title: "VEGA© Executive Masterclass, VRT Management Group",
    description:
      "Every month we solve one critical business challenge. Join our complimentary executive masterclass.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${libre.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
