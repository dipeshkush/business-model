"use client";

import { useEffect, useRef, useState } from "react";
import { FaHandHoldingUsd, FaClock, FaUsers } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";

const models = [
  {
    title: "Fixed Cost Model",
    subtitle: "Best for Defined Projects",
    icon: <FaHandHoldingUsd className="text-[#5A59A9] text-4xl" />,
    image: "/fixedcost.svg",
    when: [
      "Clear requirements & timelines",
      "Landing pages, corporate sites, portfolios",
      "eCommerce setup, UI design + frontend build",
    ],
    how: `We estimate project scope and deliverables upfront. You get a clear timeline, transparent pricing, and milestones — no surprises.`,
    details: [
      "Ideal for: Startups, SMEs",
      "Technologies: HTML, WordPress, React, Shopify",
      "Timeline: 2–5 weeks",
    ],
  },
  {
    title: "Hourly Model",
    subtitle: "Best for Small Tasks or Ongoing Tweaks",
    icon: <FaClock className="text-[#5A59A9] text-4xl" />,
    image: "/hourly.svg",
    when: [
      "Minor updates, bug fixes",
      "Landing page speed optimization",
      "Add-on module integrations or plugin fixes",
    ],
    how: `Buy developer hours and use them flexibly. You only pay for what you use — no retainers, no wastage.`,
    details: [
      "Ideal for: Maintenance, urgent fixes",
      "Tools: Time trackers, shared dashboards",
      "Pricing: INR 499 - 899/hour (based on stack)",
    ],
  },
  {
    title: "Dedicated Resource Model",
    subtitle: "Best for Scaling Startups & Agencies",
    icon: <FaUsers className="text-[#5A59A9] text-4xl" />,
    image: "/dedicated.svg",
    when: [
      "You need full time talent without hiring overhead",
      "You want weekly sprints, agile delivery",
      "You’re an agency looking to outsource delivery",
    ],
    how: `We assign dedicated developers (or full teams) who work exclusively on your projects fully integrated into your workflow and reporting systems.`,
    details: [
      "Ideal for: SaaS, design studios, product teams",
      "Monthly Hiring: 80/160/240 hours",
      "Skills: React, Laravel, Flutter, Firebase, Shopify",
      "Perks: Transparent work logs, Daily standups, Dedicated PM, Timezone overlap",
    ],
  },
];

export default function WorkingModel() {
  const [selectedCard, setSelectedCard] = useState(0);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (detailsRef.current) {
      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
        }
      );
    }
  }, [selectedCard]);
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#5A59A9] mb-2">
            Engagement Models We Offer
          </h2>
          <p className="text-md md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the engagement style that fits your workflow, budget, and goals — from fixed projects to full-time resources.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {models.map((model, idx) => (
            <div
              key={idx}
              className={`flex-1 bg-white p-2 border border-gray-200 rounded-2xl shadow-lg transition-all duration-300 ease-in-out group hover:shadow-2xl relative overflow-hidden
                  before:content-[''] before:absolute before:bottom-2 before:left-1/2 before:-translate-x-1/2 
                  before:h-[2px] before:w-0 before:bg-[#5A59A9] before:rounded-full hover:scale-105 
                  before:transition-all before:duration-300 group-hover:before:w-12`}
            >
              {/* Icon + Title */}
              <div className="flex flex-col items-center text-center mb-2">
                <div className="mb-2 text-[#5A59A9]">
                  <span className="text-3xl">{model.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#5A59A9]">{model.title}</h3>
              </div>

              {/* Subtitle */}
              <p className="text-sm text-gray-700 italic text-center">{model.subtitle}</p>

              {/* Button */}
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setSelectedCard(idx)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300
            ${selectedCard === idx
                      ? "bg-[#5A59A9] text-white"
                      : "bg-white text-[#5A59A9] border border-[#5A59A9]"}
            hover:bg-[#4c4ba1] hover:text-white hover:shadow-md`}
                >
                  {selectedCard === idx ? "View Details" : "View Details"}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Details Section */}
        {selectedCard !== null && (
          <div
            ref={detailsRef}
            className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl grid md:grid-cols-2 gap-10 transition-all duration-300"
          >
            {/* Content Section */}
            <div className="space-y-8">
              {/* Title with Icon */}
              <div className="flex items-center gap-3">
                <div className="text-4xl text-[#5A59A9]">{models[selectedCard].icon}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#5A59A9]">
                  {models[selectedCard].title}
                </h2>
              </div>

              {/* When to Choose */}
              <div>
                <h4 className="text-[#5A59A9] font-semibold uppercase text-sm mb-2">When to Choose</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {models[selectedCard].when.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* How it works */}
              <div>
                <h4 className="text-[#5A59A9] font-semibold uppercase text-sm mb-2">How It Works</h4>
                <p className="text-gray-800 leading-relaxed">
                  {models[selectedCard].how}
                </p>
              </div>

              {/* Extra Details */}
              <div className="border-t pt-4 space-y-2 text-gray-800">
                {models[selectedCard].details.map((line, i) => {
                  const [label, rest] = line.split(":");
                  return (
                    <p key={i}>
                      <span className="font-semibold text-[#5A59A9]">{label}:</span>
                      <span className="ml-1">{rest}</span>
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-full h-64 md:h-auto flex items-center justify-center">
              <div className="w-full h-full relative">
                <Image
                  src={models[selectedCard].image}
                  alt={models[selectedCard].title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
