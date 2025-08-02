import {  Lightbulb, Palette, Code, Rocket } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { SiMinutemailer } from 'react-icons/si';
import { motion, useAnimation, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
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

const WorkingMethod = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.2 });
    const controlsLeft = useAnimation();
    const router = useRouter();

    const handleClick = () => router.push("/contact-us");

    useEffect(() => {
        if (isInView) {
            controlsLeft.start({ opacity: 1, x: 0, transition: { duration: 0.7 } });
        } else {
            controlsLeft.start({ opacity: 0, x: -50, transition: { duration: 0.5 } });
        }
    }, [isInView]);

    const steps = [
        {
            icon: Lightbulb,
            color: "bg-yellow-100 text-yellow-600",
            title: "Strategy & Planning",
            desc: "We define goals and timelines with clarity for all stakeholders.",
        },
        {
            icon: Palette,
            color: "bg-pink-100 text-pink-600",
            title: "Design Thinking",
            desc: "We align user psychology with business-driven UI design.",
        },
        {
            icon: Code,
            color: "bg-green-100 text-green-600",
            title: "Development Excellence",
            desc: "We write scalable, clean, and SEO-optimized code.",
        },
        {
            icon: Rocket,
            color: "bg-blue-100 text-blue-600",
            title: "Launch & Scale",
            desc: "Integrated analytics & performance tracking on launch.",
        },
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-gray-50" ref={ref}>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start justify-between gap-16">
                {/* LEFT */}
                <motion.div
                    className="flex-[1.2]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={controlsLeft}
                >
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug"
                    >
                        <span className="text-[#5A59A9]">Working</span>{" "}
                        <span className="text-[#5A59A9]">Method</span>
                    </h1>

                    <h2
                        className={`text-2xl md:text-3xl font-extrabold text-gray-700 mt-4 md:text-left ${tilt_neon.className}`}
                    >
                        How We Work at WebSeeder
                    </h2>
                    <h2
                        className={`text-2xl md:text-3xl font-extrabold text-gray-700 mb-6 md:text-left ${tilt_neon.className}`}
                    >
                        From Idea to Execution, Seamlessly
                    </h2>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                        At WebSeeder, we don’t just deliver websites and apps – we deliver
                        experiences that work, scale, and convert. Our step-by-step project
                        delivery process is built on clarity, collaboration, and code
                        quality.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 text-justify">
                        Whether you’re a startup founder or a global agency, our method
                        adapts to your project’s complexity, timeline, and goals – with
                        complete transparency at every stage.
                    </p>

                    <div className="flex justify-center sm:justify-start w-full">
                        <motion.button
                            onClick={handleClick}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center justify-center bg-[#5c66ab] hover:bg-[#394173] text-white rounded px-4 py-2 text-sm sm:text-lg shadow-lg gap-2 transition-all duration-300 transform"
                        >
                            {/* Default Text */}
                            <span className="transition">
                                Let's Connect
                            </span>

                            {/* Hover Icon (Send) */}
                            <SiMinutemailer
                                size={24}
                                className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </motion.button>
                    </div>

                </motion.div>

                {/* RIGHT */}
                <motion.div
                    className="hidden sm:block flex-[0.8] w-full"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className={`
                                            bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition 
                                            duration-300 flex flex-col items-start text-left cursor-pointer
                                            transform
                                            ${idx % 2 !== 0 ? "sm:translate-y-8" : ""
                                        }
                                            hover:scale-[1.03]
                                            `}
                                    custom={idx}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div
                                        className={`${step.color} p-3 rounded-full flex items-center justify-center mb-4`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                                        {step.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.desc}
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

export default WorkingMethod;
