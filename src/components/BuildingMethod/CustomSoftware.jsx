"use client";

import React from "react";
import { Tilt_Neon } from "next/font/google";
import { FaRocket, FaUser, FaCogs, FaChartLine, FaWeight } from "react-icons/fa";

const tilt_neon = Tilt_Neon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tilt-neon",
  display: "swap",
});

const features = [
  {
    title: "Tailored Functionality",
    description: "Matches your internal processes 100% – no compromise.",
    icon: <FaRocket className="text-sky-500" />,
    textColor: "text-sky-500",
    borderColor: "border-sky-500",
  },
  {
    title: "Full Ownership",
    description: "No monthly subscriptions. You own the IP & database.",
    icon: <FaUser className="text-green-500" />,
    textColor: "text-green-500",
    borderColor: "border-green-500",
  },
  {
    title: "Better Security",
    description: "Your software. Your data. Locked down with modern encryption.",
    icon: <FaCogs className="text-lime-600" />,
    textColor: "text-lime-600",
    borderColor: "border-lime-600",
  },
  {
    title: "Seamless Automation",
    description: "Automate tasks across CRMs, WhatsApp, Google Sheets & more.",
    icon: <FaChartLine className="text-yellow-500" />,
    textColor: "text-yellow-500",
    borderColor: "border-yellow-500",
  },
  {
    title: "Built for Scale",
    description: "Start small. Grow endlessly. Add users, modules, features anytime.",
    icon: <FaWeight className="text-orange-500" />,
    textColor: "text-orange-500",
    borderColor: "border-orange-500",
  },
];

const CustomSoftware = () => {
  return (
    <section className="min-h-screen w-full px-4 sm:px-6 md:px-12 lg:px-28 bg-white py-12 lg:py-20">
      <div className="w-full flex flex-col items-center justify-center gap-12">

        {/* Heading */}
        <div className="text-center max-w-3xl px-2">
          <h2
            className={`text-[clamp(1.5rem,4vw,2.5rem)] font-extrabold text-gray-900 ${tilt_neon.className}`}
          >
            Why Businesses Choose{" "}
            <span className="text-blue-700">Custom Software</span>
          </h2>
          <p className="mt-4 text-[clamp(0.9rem,1.4vw,1.1rem)] text-gray-600">
            Discover how custom-built solutions give your business unmatched flexibility,
            security, and scalability.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-12 w-full">

          {/* Left Description */}
          <div className="w-full lg:max-w-lg bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm">
            <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] text-gray-700 leading-relaxed">
              Custom software development offers businesses a tailored solution that aligns
              perfectly with internal workflows—no compromises. Unlike off-the-shelf tools,
              it grants you full ownership of the codebase, database, and IP—eliminating
              recurring fees. With advanced security, end-to-end encryption, and seamless
              integration with CRMs, WhatsApp, Google Sheets, and more—automation becomes
              effortless. Best of all, it's built to scale: start small and grow infinitely
              by adding features, users, and modules without limits.
            </p>
          </div>

          {/* Right Features */}
          <div className="w-full lg:max-w-xl space-y-6">
            {features.map(({ title, description, icon, textColor, borderColor }, idx) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-5 group">
                <div className={`mt-1 shrink-0 text-[clamp(1.2rem,1.8vw,1.6rem)]`}>
                  {icon}
                </div>
                <div
                  className={`pl-4 border-l-2 ${borderColor} transition-all duration-300 group-hover:translate-x-1`}
                >
                  <h3
                    className={`text-[clamp(1rem,1.5vw,1.25rem)] font-semibold mb-1 ${textColor}`}
                  >
                    {title}
                  </h3>
                  <p className="text-[clamp(0.85rem,1.3vw,1rem)] text-gray-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomSoftware;
