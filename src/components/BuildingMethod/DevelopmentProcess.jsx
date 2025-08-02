"use client";

import React from "react";
import Image from "next/image";
import process from "@/app/assets/BuildingMethod/Group 16.png";

const DevelopmentProcess = () => {
  return (
    <section className="w-full px-6 py-16 md:px-16 lg:px-28 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
          Why Businesses Choose Custom Software
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-15">
        {/* Left Image */}
        <div className="mb-10 mt-10 w-full max-w-sm lg:max-w-sm">
          <Image
            src={process}
            alt="Custom Software Illustration"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

    </section>
  );
};

export default DevelopmentProcess;
