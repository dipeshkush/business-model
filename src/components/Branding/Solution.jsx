"use client";

import React from "react";
import {
    FaMagic,
    FaServer,
    FaBrain,
    FaLightbulb,
    FaBullhorn,
    FaTrophy,
    FaEnvelope,
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

const services = [
    {
        icon: <FaMagic className="w-7 h-7 text-[#7A7ACB]" />,
        title: "SEO (On-page + Off-page)",
        desc: "Content, schema, Core Web Vitals",
    },
    {
        icon: <FaServer className="w-7 h-7 text-[#7A7ACB]" />,
        title: "Technical SEO & Site Audits",
        desc: "Crawl, structure, Core Web Vitals",
    },
    {
        icon: <FaBrain className="w-7 h-7 text-[#7A7ACB]" />,
        title: "AIO Optimization",
        desc: "Rank on Gemini, ChatGPT, Copilot, Perplexity",
    },
    {
        icon: <FaLightbulb className="w-7 h-7 text-[#7A7ACB]" />,
        title: "AI Content Strategy",
        desc: "Topical clusters, featured snippet content",
    },
    {
        icon: <FaBullhorn className="w-7 h-7 text-[#7A7ACB]" />,
        title: "Social Media Management",
        desc: "Calendar, creatives, engagement",
    },
    {
        icon: <FaTrophy className="w-7 h-7 text-[#7A7ACB]" />,
        title: "Paid Ads",
        desc: "Google, Meta, LinkedIn with ROAS optimization",
    },
    {
        icon: <FaEnvelope className="w-7 h-7 text-[#7A7ACB]" />,
        title: "Email Funnels & Automation",
        desc: "ConvertKit, Mailchimp, custom flows",
    },
    {
        icon: <FaChartBar className="w-7 h-7 text-[#7A7ACB]" />,
        title: "Analytics & Reporting",
        desc: "GA4, Looker Studio, heatmaps",
    },
];

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

const Solution = () => {
    return (
        <section className="py-16 px-6 md:px-16 lg:px-28 bg-white text-center min-h-screen overflow-hidden">
            <h2
                className={`text-3xl md:text-4xl mb-3 font-extrabold text-gray-900 text-center ${tilt_neon.className}`}
            >
                Our Services: Branding + Digital Marketing Solutions
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-700 font-medium">
                End-to-End Branding & Digital Services at WebSeeder
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12 mt-16 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-start text-left gap-4 px-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        custom={index}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.03 }}
                    >
                        {service.icon}
                        <h4 className="text-[#4B4B9F] font-semibold text-[18px] leading-snug border-l-2 border-[#7A7ACB] pl-3">
                            {service.title}
                        </h4>
                        <p className="text-[14px] text-gray-600 pl-3">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Solution;
