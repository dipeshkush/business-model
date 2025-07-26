"use client";
import React from "react";
import { Briefcase, Globe, Building } from "lucide-react";

const workingModels = [
  {
    title: "Remote Work Model",
    icon: <Globe size={25} />,
    description:
      "Complete freedom to work from anywhere with full digital collaboration tools and processes.",
    features: ["100% Remote", "Flexible Hours", "Global Talent", "Digital-First"],
  },
  {
    title: "Hybrid Model",
    icon: <Briefcase size={25} />,
    description:
      "Best of both worlds combining office collaboration with remote work flexibility.",
    features: ["Office + Remote", "Team Collaboration", "Work-Life Balance", "Flexible Schedule"],
  },
  {
    title: "On-Site Model",
    icon: <Building size={25} />,
    description:
      "Traditional office-based approach with direct team interaction and collaboration.",
    features: ["Office Based", "Direct Communication", "Team Building", "Structured Environment"],
  },
];

export default function WorkingModelSection() {
  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      {/* Soft Bubbles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-[float_18s_ease-in-out_infinite]" />
      <div className="absolute bottom-16 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl animate-[float_22s_ease-in-out_infinite]" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading + Subheading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#5A59A9] mb-4">
            Explore Our Working Models
          </h2>
          <p className="text-gray-600 text-md">
            Choose a working model that aligns with your goals — whether it's full remote flexibility,
            hybrid collaboration, or structured on-site engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image */}
          <div className="order-2 md:order-1">
            <img
              src="/working-models.webp"
              alt="Working Models"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Right Side: Cards */}
          <div className="order-1 md:order-2 space-y-8">
            {workingModels.map((model, index) => (
              <div
                key={index}
                className="relative bg-white/30 border border-blue-800 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-[1.02]"
              >
                {/* Icon Badge */}
                <div className="absolute -top-5 left-5 bg-white text-blue-600 shadow-md p-2 rounded-full">
                  {model.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                  {model.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{model.description}</p>
                <div className="flex flex-wrap gap-2">
                  {model.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
