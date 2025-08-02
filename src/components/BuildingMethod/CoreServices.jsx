"use client";

import React from "react";
import {
  FaLaptop,
  FaThLarge,
  FaSyncAlt,
  FaBolt,
  FaShareAlt,
  FaChartBar,
} from "react-icons/fa";
import { Tilt_Neon } from "next/font/google";

const tilt_neon = Tilt_Neon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tilt-neon",
  display: "swap",
});

// Define your service data
const services = [
  {
    icon: FaLaptop,
    title: "Custom Web Application",
    description: "Business platforms, dashboards, admin panels",
    bg: "bg-blue-500/20",
    hoverGlow: "group-hover:shadow-blue-500/50",
  },
  {
    icon: FaThLarge,
    title: "Internal ERP & CRM Systems",
    description: "Custom sales pipelines, inventory, finance tools",
    bg: "bg-purple-500/20",
    hoverGlow: "group-hover:shadow-purple-500/50",
  },
  {
    icon: FaSyncAlt,
    title: "Workflow Automation Tools",
    description: "Auto emails, form triggers, approvals, scheduling",
    bg: "bg-yellow-500/20",
    hoverGlow: "group-hover:shadow-yellow-500/50",
  },
  {
    icon: FaBolt,
    title: "AI Powered Automation",
    description: "Google Vision, ChatGPT, OCR, and process prediction",
    bg: "bg-pink-500/20",
    hoverGlow: "group-hover:shadow-pink-500/50",
  },
  {
    icon: FaShareAlt,
    title: "API Integration & Sync",
    description: "Zoho, Tally, Razorpay, WhatsApp, GSheet",
    bg: "bg-green-500/20",
    hoverGlow: "group-hover:shadow-green-500/50",
  },
  {
    icon: FaChartBar,
    title: "Data Visualization & Reporting Tools",
    description: "Live KPIs, dashboards, downloadable reports",
    bg: "bg-red-500/20",
    hoverGlow: "group-hover:shadow-red-500/50",
  },
];

const CoreServices = () => {
  return (
    <section className="relative bg-gray-900 py-16 px-4 md:px-10 lg:px-20 min-h-screen overflow-hidden">
      {/* Gradient Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>

      <div className="relative text-center mb-12">
        <h2
          className={`text-3xl md:text-4xl font-extrabold text-white ${tilt_neon.className}`}
        >
          What We Build – Our
        </h2>
        <h2
          className={`text-3xl md:text-4xl font-extrabold text-white ${tilt_neon.className}`}
        >
          Core Services
        </h2>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`group border border-gray-700 backdrop-blur-lg bg-gray-800/30 p-6 rounded-xl flex flex-col items-center text-center space-y-4 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-md ${service.hoverGlow}`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${service.bg} transition-all duration-300`}
              >
                <Icon size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreServices;
