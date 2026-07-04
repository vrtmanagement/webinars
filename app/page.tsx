import { Hero } from "@/components/sections/Hero";
import { TrustedCompanies } from "@/components/sections/TrustedCompanies";
import { AboutWebinar } from "@/components/sections/AboutWebinar";
import { FeaturedWebinars } from "@/components/sections/FeaturedWebinars";
import { Timeline } from "@/components/sections/Timeline";
import { WhyAttend } from "@/components/sections/WhyAttend";
import { Categories } from "@/components/sections/Categories";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <AboutWebinar />
      <FeaturedWebinars />
      <Timeline />
      <WhyAttend />
      <Categories />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
