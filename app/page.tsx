import { Hero } from "@/components/sections/Hero";
import { FeaturedWebinars } from "@/components/sections/FeaturedWebinars";
import { AboutWebinar } from "@/components/sections/AboutWebinar";
import { WhoShouldAttend } from "@/components/sections/WhoShouldAttend";
import { Topics } from "@/components/sections/Topics";
import { WhyAttend } from "@/components/sections/WhyAttend";
import { AfterMasterclass } from "@/components/sections/AfterMasterclass";
import { Philosophy } from "@/components/sections/Philosophy";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWebinars />
      <AboutWebinar />
      <WhoShouldAttend />
      <Topics />
      <WhyAttend />
      <AfterMasterclass />
      <Philosophy />
      <FAQ />
      <CTA />
    </>
  );
}
