"use client";

import { useEffect, useRef, useState } from "react";
import { DollarSign, Clock, Users } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

const models = [
  {
    title: "Fixed Cost Model",
    subtitle: "Best for Defined Projects",
    icon: <DollarSign className="text-[#5A59A9]" size={24} />,
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
    icon: <Clock className="text-[#5A59A9]" size={24} />,
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
    icon: <Users className="text-[#5A59A9]" size={24} />,
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
  const [expanded, setExpanded] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (expanded !== null) {
      gsap.fromTo(
        cardRefs.current[expanded],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [expanded]);

  const handleClose = () => setExpanded(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center text-[#5A59A9] mb-2">
            Engagement Models We Offer
          </h2>
          <p className="text-md md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the engagement style that fits your workflow, budget, and goals — from fixed projects to full-time resources.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 transition-all">
          {models.map((model, idx) => {
            const isActive = expanded === idx;

            if (expanded !== null && !isActive) return null;

            return (
              <div
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                className={`relative flex flex-col md:flex-row w-full transition-all bg-white duration-500 ease-in-out border border-gray-200 rounded-2xl shadow-md overflow-hidden ${isActive ? "p-6" : "p-4 hover:shadow-xl hover:scale-[1.01]"
                  }`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-2">
                    {model.icon}
                    <h3 className="text-xl font-semibold text-[#5A59A9]">
                      {model.title}
                    </h3>
                  </div>
                  <p className="text-md italic text-gray-700">{model.subtitle}</p>

                  {!isActive && (
                    <button
                      onClick={() => setExpanded(idx)}
                      className="group mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-[#5A59A9] text-white transition-all duration-300 hover:bg-[#4c4ba1] hover:shadow-md hover:scale-105"
                    >
                      <svg
                        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      View Details
                    </button>

                  )}

                  {isActive && (
                    <>
                      <div className="bg-[#f9f9fd] rounded-xl p-6 mt-4 shadow-sm border border-[#e3e3f3] space-y-6 transition-all duration-500">
                        {/* When to Choose */}
                        <div>
                          <h4 className="text-[#5A59A9] font-semibold text-sm uppercase mb-2">
                            When to Choose
                          </h4>
                          <ul className="list-disc pl-5 text-gray-800 space-y-1">
                            {model.when.map((item, i) => (
                              <li key={i} className="leading-relaxed">{item}</li>
                            ))}
                          </ul>
                        </div>

                        {/* How It Works */}
                        <div>
                          <h4 className="text-[#5A59A9] font-semibold text-md uppercase mb-2">
                            How It Works
                          </h4>
                          <p className="text-gray-800 leading-relaxed">{model.how}</p>
                        </div>

                        {/* Additional Details */}
                        <div className="grid gap-2 text-gray-800 text-md">
                          {model.details.map((line, i) => {
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

                      {/* Close Button */}
                      <button
                        onClick={handleClose}
                        className="group mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#5A59A9] border border-[#5A59A9] rounded-full transition-all duration-300 hover:bg-[#5A59A9] hover:text-white hover:shadow-md"
                      >
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Close
                      </button>

                    </>
                  )}

                </div>

                {isActive && (
                  <div className="relative w-full md:w-[40%] h-64 md:h-auto mt-6 md:mt-0">
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
