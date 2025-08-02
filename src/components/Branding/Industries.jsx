"use client";

import {
    FaRocket,
    FaHeartbeat,
    FaGraduationCap,
    FaShoppingCart,
    FaBuilding,
    FaLaptopHouse,
} from "react-icons/fa";
import { Tilt_Neon } from "next/font/google";
import { motion } from "framer-motion";

const tilt_neon = Tilt_Neon({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-tilt-neon",
    display: "swap",
});

const industries = [
    {
        icon: <FaRocket className="text-white w-6 h-6" />,
        title: "Startups",
        description: "Naming, brand kits, pitch decks, SEO launchpad",
    },
    {
        icon: <FaHeartbeat className="text-white w-6 h-6" />,
        title: "Healthcare",
        description: "Patient-first branding + doctor reputation SEO",
    },
    {
        icon: <FaGraduationCap className="text-white w-6 h-6" />,
        title: "EdTech",
        description: "Conversion-focused landing + keyword content",
    },
    {
        icon: <FaShoppingCart className="text-white w-6 h-6" />,
        title: "D2C eCommerce",
        description: "Brand-led packaging + product-led SEO",
    },
    {
        icon: <FaBuilding className="text-white w-6 h-6" />,
        title: "B2B SaaS",
        description: "Funnel strategy + enterprise content marketing",
    },
    {
        icon: <FaLaptopHouse className="text-white w-6 h-6" />,
        title: "Real Estate",
        description: "Builder branding + local search optimization",
    },
];

export default function Industries() {
    return (
        <section className="py-20 px-6 md:px-16 text-center bg-white min-h-screen overflow-hidden">
            <h2 className={`text-3xl md:text-4xl mb-5 font-extrabold text-gray-800 ${tilt_neon.className}`}>
                Industries We Serve
            </h2>
            <p className="mt-2 text-gray-600 text-lg">
                Branding & Digital Strategies That Scale Across Sectors
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-8">
                {industries.map((industry, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="group flex flex-col items-center text-center p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-gray-50 border border-gray-100 hover:-translate-y-1"
                    >
                        <div className="mb-4 bg-gray-700 p-4 rounded-full shadow-inner">
                            {industry.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                            {industry.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">{industry.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
