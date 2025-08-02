"use client";

import useSmoothScroll from "@/hooks/useSmoothScroll";
import "../globals.css";
import Hero from "@/components/Branding/Hero";
import DigitalPartner from "@/components/Branding/DigitalPartner";
import Solution from "@/components/Branding/Solution";
import GrowthProcess from "@/components/Branding/GrowthProcess";
import TechStack from "@/components/Branding/TechStack";
import Industries from "@/components/Branding/Industries";
import Results from "@/components/Branding/Results";
import FAQs from "@/components/Branding/FAQs";

export default function Home() {
  useSmoothScroll();
  return (
    <div className=" bg-gray-50">
      <Hero />
      <DigitalPartner />
      <Solution />
      <GrowthProcess/>
      <TechStack />
      <Industries/>
      <Results/>
      <FAQs />
    </div>
  );
}
