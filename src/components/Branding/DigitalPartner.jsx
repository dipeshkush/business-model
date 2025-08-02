"use client";

import React from "react";
import {
    FaBullseye,
    FaPalette,
    FaSearch,
    FaShareAlt,
    FaPenFancy,
    FaChartLine,
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
        icon: <FaBullseye className="text-gray-700 w-6 h-6" />,
        title: "Strategic Brand Positioning",
        desc: "Market + competitor research",
    },
    {
        icon: <FaPalette className="text-gray-700 w-6 h-6" />,
        title: "Visual Identity & Messaging",
        desc: "Logo, typography, tone",
    },
    {
        icon: <FaSearch className="text-gray-700 w-6 h-6" />,
        title: "SEO & AIO",
        desc: "Rank on Google and AI search tools",
    },
    {
        icon: <FaShareAlt className="text-gray-700 w-6 h-6" />,
        title: "Social Media Marketing",
        desc: "Organic + paid strategy",
    },
    {
        icon: <FaPenFancy className="text-gray-700 w-6 h-6" />,
        title: "Content Strategy",
        desc: "Blogs, web, video, AI content",
    },
    {
        icon: <FaChartLine className="text-gray-700 w-6 h-6" />,
        title: "Conversion Optimization",
        desc: "UI/UX + funnel improvements",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const DigitalPartner = () => {
    return (
        <section className="py-16 px-6 md:px-10 lg:px-20 text-center bg-white min-h-screen overflow-hidden ">
            <h2
                className={`text-3xl md:text-4xl mb-3 font-extrabold text-gray-900 text-center ${tilt_neon.className}`}
            >
                Why Your Brand Needs a Full Stack Digital Partner
            </h2>
            <p className="text-gray-500 text-sm mb-12">
                One Partner. Every Digital Touchpoint Covered.
            </p>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.03 }}
                        className="group flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-left"
                    >
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                                {service.icon}
                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <h4 className="text-base font-semibold text-gray-800">
                                {service.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">{service.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default DigitalPartner;
