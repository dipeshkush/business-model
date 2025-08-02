"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Tilt_Neon } from "next/font/google";

const tilt_neon = Tilt_Neon({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-tilt-neon",
    display: "swap",
});

const highlights = [
    "Agile Sprints for transparent tracking",
    "Client collaboration through Slack & ClickUp",
    "Speed First + SEO First development",
    "100% Ownership of code & credentials",
    "No outsourcing to unknown vendors",
    "Ongoing support even after project delivery",
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

export default function WhyUs() {
    return (
        <section className="py-16 px-6 md:px-20 bg-gray-50">
            <div className="text-center max-w-4xl mx-auto">
                <motion.h2
                    className={`text-2xl md:text-4xl font-black text-blue-900 mb-4 ${tilt_neon.className}`}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    custom={0}
                >
                    Why Our Working Method Works
                </motion.h2>

                <motion.p
                    className="text-sm md:text-lg text-blue-700 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    custom={1}
                >
                    We believe in transparency, speed, collaboration, and full control.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow flex items-start gap-4"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUp}
                            custom={index + 2}
                        >
                            <CheckCircle className="text-green-600 mt-1" size={20} />
                            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
