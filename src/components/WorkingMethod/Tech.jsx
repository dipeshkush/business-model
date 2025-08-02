"use client";

import React, { useState } from "react";
import { technologies } from "@/app/constants";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SiMinutemailer } from 'react-icons/si';
import Image from "next/image";
import { Tilt_Neon } from "next/font/google";

const tilt_neon = Tilt_Neon({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-tilt-neon",
    display: "swap",
});

const categories = [
    "frontend",
    "backend",
    "database",
    "tools",
    "cloude service",
    "mobile",
];

const fadeIn = (direction = "up", delay = 0) => ({
    hidden: {
        y: direction === "up" ? 40 : -40,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            delay,
            ease: "easeOut",
        },
    },
});

const Tech = () => {
    const [activeCategory, setActiveCategory] = useState("frontend");
    const filteredTech = technologies.filter(
        (tech) => tech.category === activeCategory
    );
    const router = useRouter();

    const handleClick = () => {
        router.push("/contact-us");
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center gap-2"
        >
            {/* Heading */}
            <motion.div
                variants={fadeIn("up", 0.1)}
                className="text-center max-w-4xl mx-auto my-16 px-4"
            >
                <h2 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 text-pink-600">
                    Fueling Progress Through Constant Innovation
                </h2>
                <p
                    className={`text-2xl md:text-4xl font-black text-blue-900 mt-4 text-center ${tilt_neon.className}`}
                >
                    <span className="relative z-10">
                        Modern <span className="bg-clip-text text-blue-900">Technologies</span>
                        <br className="block md:hidden" />
                        <span className="ml-2">We are Leveraging</span>
                    </span>
                </p>
            </motion.div>

            {/* Category Tabs */}
            <motion.div
                variants={fadeIn("up", 0.2)}
                className="flex flex-wrap justify-center border-b border-gray-300 w-full max-w-6xl mx-auto px-4"
            >
                <div className="relative flex flex-wrap gap-4 py-3 justify-center">
                    {categories.map((cat) => (
                        <div key={cat} className="relative">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 cursor-pointer py-2 text-sm md:text-base font-medium transition-colors duration-200 ${activeCategory === cat
                                        ? "text-blue-600"
                                        : "text-gray-600 hover:text-blue-500"
                                    }`}
                            >
                                {cat.toUpperCase()}
                            </motion.button>

                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Icons */}
            <motion.div
                variants={fadeIn("up", 0.3)}
                className="flex flex-wrap justify-center gap-10 px-6 mt-10"
            >
                {filteredTech.map((technology, i) => (
                    <motion.div
                        key={technology.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-28 h-28 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out">
                            <Image
                                src={technology.icon}
                                alt={technology.name}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                        <span className="mt-2 text-sm md:text-base font-semibold text-center text-blue-800">
                            {technology.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
                variants={fadeIn("up", 0.4)}
                whileTap={{ scale: 0.95 }}
                className="mt-12 mb-6"
            >
                <button
                    onClick={handleClick}
                    className="group inline-flex items-center justify-center bg-[#5c66ab] hover:bg-[#394173] text-white rounded px-4 py-2 text-sm sm:text-lg shadow-lg gap-2 transition-all duration-300 transform"
                >
                    Get a Quote Now!
                    <span className="plane-wrapper relative w-[30px] h-[30px]">
                        <SiMinutemailer
                            size={24}
                            className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                        <span className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-trail-glow"></span>
                    </span>
                </button>

            </motion.div>
        </motion.div>
    );
};

export default Tech;
