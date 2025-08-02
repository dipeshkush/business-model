"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
    FaMobileAlt,
    FaDesktop,
    FaPaintBrush,
    FaCode,
} from "react-icons/fa";
import { Tilt_Neon } from "next/font/google";

const tilt_neon = Tilt_Neon({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-tilt-neon",
    display: "swap",
});

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * i,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const services = [
    {
        title: "Mobile-First Design",
        description:
            "Optimized experiences across all devices with responsive, user-centric layouts.",
        icon: FaMobileAlt,
    },
    {
        title: "Cross-Browser Support",
        description:
            "Ensuring compatibility and performance on all major browsers and platforms.",
        icon: FaDesktop,
    },
    {
        title: "UI/UX Optimization",
        description:
            "Modern interfaces designed to improve navigation, engagement, and retention.",
        icon: FaPaintBrush,
    },
    {
        title: "Custom Development",
        description:
            "Built from scratch using React, Tailwind, and CMS integration for full control.",
        icon: FaCode,
    },
];

const ResponsiveSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { threshold: 0.2 });

    return (
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 min-h-screen overflow-hidden">
            <div
                ref={ref}
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2
                        className={`text-3xl md:text-4xl font-extrabold text-gray-900 ${tilt_neon.className}`}
                    >
                        Responsive <span className="text-blue-700">Web Design</span> <br className="hidden md:block" /> & <span className="text-blue-700">Custom
                            Development</span> Solutions
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        We build mobile friendly, SEO optimized websites that adapt seamlessly
                        across desktops, tablets and smartphones. As a trusted website
                        development company in Indore, we specialize in custom web design,
                        UI/UX and scalable tech stacks that match your brand’s vision and boost
                        user engagement. Whether it’s a corporate site, CMS or eCommerce
                        platform, our responsive designs are built to perform and convert.
                    </p>
                </motion.div>

                {/* Right Cards Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="w-full"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
                        {services.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    custom={idx}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className={`bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-start text-left cursor-pointer transform ${idx % 2 !== 0 ? "sm:translate-y-8" : ""
                                        }`}
                                >
                                    <div className="bg-indigo-100 p-3 rounded-full flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-indigo-500" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                                        {step.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResponsiveSection;
