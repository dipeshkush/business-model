"use client";

import {
  FaCheckCircle,
  FaUsers,
  FaRobot,
  FaPencilRuler,
  FaHandshake,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Tilt_Neon } from "next/font/google";
import { SiMinutemailer } from "react-icons/si";
import { useRef } from "react";

const tilt_neon = Tilt_Neon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tilt-neon",
  display: "swap",
});

const benefits = [
  {
    title: "Establish Trust & Credibility",
    description:
      "A professional website builds trust and positions your brand as reliable and legitimate.",
    icon: <FaCheckCircle className="w-6 h-6 text-white" />,
    bg: "bg-blue-600",
  },
  {
    title: "Engage & Educate Visitors",
    description:
      "Use content, visuals, and interactions to educate users and keep them engaged.",
    icon: <FaUsers className="w-6 h-6 text-white" />,
    bg: "bg-indigo-500",
  },
  {
    title: "Capture Leads 24/7",
    description:
      "Forms, chatbots, and CTAs turn passive visitors into qualified leads—even after hours.",
    icon: <FaRobot className="w-6 h-6 text-white" />,
    bg: "bg-purple-600",
  },
  {
    title: "Showcase Your Brand Identity",
    description:
      "Use visuals, tone, and custom design to stand out and create emotional connection.",
    icon: <FaPencilRuler className="w-6 h-6 text-white" />,
    bg: "bg-pink-500",
  },
  {
    title: "Build Long-Term Customer Loyalty",
    description:
      "Offer value, transparency, and convenience to turn users into loyal fans.",
    icon: <FaHandshake className="w-6 h-6 text-white" />,
    bg: "bg-rose-500",
  },
  {
    title: "Drive Sales & Conversions",
    description:
      "Good UX and mobile optimization boost signups, inquiries, and purchases.",
    icon: <FaLaptopCode className="w-6 h-6 text-white" />,
    bg: "bg-green-600",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function BusinessGrowthBenefits() {
  const buttonRef = useRef(null);

  return (
    <section className="py-20 px-4 bg-white overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className={`mb-6 text-center text-3xl sm:text-4xl font-bold ${tilt_neon.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          How a Website Accelerates <br /> Your Business Growth
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${item.bg}`}
              >
                {item.icon}
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              ref={buttonRef}
              className="mt-8 flex justify-center lg:justify-center"
            >
              <a
                href="/contact-us"
                className="group inline-flex items-center justify-center bg-[#5c66ab] hover:bg-[#394173] text-white rounded px-5 py-3 text-sm sm:text-base font-semibold shadow-md gap-2 transition-all duration-300 transform"
              >
                Let’s Start Development
                <span className="relative w-[28px] h-[28px]">
                  <SiMinutemailer
                    size={24}
                    className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                  <span className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
