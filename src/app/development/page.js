"use client";

import useSmoothScroll from "@/hooks/useSmoothScroll";
import "../globals.css";
import Hero from "@/components/Development/Hero";
import ResponsiveSection from "@/components/Development/Responsive";
import SpecializedServices from "@/components/Development/Specialization";
import BusinessGrowthBenefits from "@/components/Development/BusinessGrowthBenefits";
import FAQSection from "@/components/Development/FAQs";
// import Navbar from "@/component/Development/Navigation";
export default function Home() {
  useSmoothScroll();
  return (
    <div className=" bg-white">
      {/* <Navbar /> */}
      <Hero />
      <ResponsiveSection />
      <SpecializedServices />
      <BusinessGrowthBenefits />
      <FAQSection />
    </div>
  );
}
