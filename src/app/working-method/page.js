"use client";

import WorkingMethod from "@/components/WorkingMethod/WorkingMethod";
import "../globals.css";
import Steps from "@/components/WorkingMethod/Steps";
import Tech from "@/components/WorkingMethod/Tech";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Phase from "@/components/WorkingMethod/Phase";
import WhyUs from "@/components/WorkingMethod/WhyUs";

export default function Home() {
  useSmoothScroll();
  return (
    <div className=" bg-gray-50">
      <WorkingMethod />
      <Steps />
      <Phase />
      <Tech />
      <WhyUs />
    </div>
  );
}
