"use client";

import React from "react";
import {
    FaSearch,
    FaLightbulb,
    FaDraftingCompass,
    FaBookOpen,
    FaBrain,
    FaBullhorn,
    FaChartBar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Tilt_Neon } from "next/font/google";

const tilt_neon = Tilt_Neon({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-tilt-neon",
    display: "swap",
});

const steps = [
    {
        icon: <FaSearch className="w-6 h-6 text-white" />,
        bg: "bg-[#B69CFF]",
        title: "Discovery & Research",
        desc: "Brand audit + competitor benchmarking",
    },
    {
        icon: <FaLightbulb className="w-6 h-6 text-white" />,
        bg: "bg-[#7BB7FF]",
        title: "Strategy Workshop",
        desc: "Messaging, personas, content roadmap",
    },
    {
        icon: <FaDraftingCompass className="w-6 h-6 text-white" />,
        bg: "bg-[#FFB46A]",
        title: "Design & Development",
        desc: "Identity, landing pages, performance structure",
    },
    {
        icon: <FaBookOpen className="w-6 h-6 text-white" />,
        bg: "bg-[#FFE274]",
        title: "SEO & Content Rollout",
        desc: "Keyword research + cluster publishing",
    },
    {
        icon: <FaBrain className="w-6 h-6 text-white" />,
        bg: "bg-[#A4E3B6]",
        title: "AIO Integration",
        desc: "Structured content for Gemini, ChatGPT, Copilot",
    },
    {
        icon: <FaBullhorn className="w-6 h-6 text-white" />,
        bg: "bg-[#85C6FF]",
        title: "Performance Campaigns",
        desc: "Paid + organic optimization",
    },
    {
        icon: <FaChartBar className="w-6 h-6 text-white" />,
        bg: "bg-[#F7A38F]",
        title: "Analytics, Reports & Iteration",
        desc: "Real-time dashboards & ongoing growth",
    },
];

// Animation variant
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const GrowthProcess = () => {
    return (
        <section className="py-20 px-4 md:px-12 lg:px-20 bg-blue-50 text-center">
            <h2
                className={`text-3xl md:text-4xl mb-3 font-extrabold text-gray-900 text-center ${tilt_neon.className}`}
            >
                Our Branding & Digital Growth Process
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-600">
                How We Build Brands that Rank and Scale
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-8 max-w-7xl mx-auto">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center text-center gap-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInUp}
                        custom={index}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div
                            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md ${step.bg}`}
                        >
                            {step.icon}
                        </div>
                        <h4 className="text-sm font-semibold text-gray-800">{step.title}</h4>
                        <p className="text-xs text-gray-500 max-w-[180px]">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default GrowthProcess;
