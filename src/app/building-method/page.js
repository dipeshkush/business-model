"use client";

import useSmoothScroll from "@/hooks/useSmoothScroll";
import "../globals.css";
import Hero from "@/components/BuildingMethod/Hero";
import CustomSoftware from "@/components/BuildingMethod/CustomSoftware";
import CoreServices from "@/components/BuildingMethod/CoreServices";
import TechStack from "@/components/BuildingMethod/TechStack";
import UseCase from "@/components/BuildingMethod/UseCase";
import FAQs from "@/components/BuildingMethod/FAQs";

export default function Home() {
  useSmoothScroll();
  return (
    <div className=" bg-gray-50">
      <Hero/>
      <CustomSoftware/>
      <CoreServices/>
      <TechStack/>
      <UseCase/>
      <FAQs/>
    </div>
  );
}
