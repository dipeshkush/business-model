"use client";

import React from "react";
import CallToAction from "@/components/WhyChooseUs/CallToAction";
import CorePillars from "@/components/WhyChooseUs/CorePillars";
import ExpertiseSection from "@/components/WhyChooseUs/ExpertiseSection";
import HeroSection from "@/components/WhyChooseUs/HeroSection";
import ProcessAndPromise from "@/components/WhyChooseUs/ProcessAndPromise";
import TrackRecord from "@/components/WhyChooseUs/TrackRecord";
import useSmoothScroll from "@/hooks/useSmoothScroll";

export default function WhyChooseUsPage() {
  useSmoothScroll();
  // Animation variants shared across components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Data for Expertise Section
  const techStack = [
    "HTML5",
    "CSS3",
    "JS",
    "React",
    "Vue",
    "PHP",
    "Laravel",
    "WordPress",
    "Node.js",
    "MongoDB",
    "Firebase",
  ];

  const industries = [
    "EdTech",
    "Real Estate",
    "SaaS",
    "FMCG",
    "Hospitality",
    "Healthcare",
    "Startups",
  ];

  return (
    <div className="bg-white min-h-screen font-raleway text-gray-800 overflow-x-hidden px-4 sm:px-6 lg:px-12">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
        <CorePillars
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
        <ProcessAndPromise
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
        <TrackRecord
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
        <ExpertiseSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          techStack={techStack}
          industries={industries}
        />
        <CallToAction
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </main>
    </div>
  );
}