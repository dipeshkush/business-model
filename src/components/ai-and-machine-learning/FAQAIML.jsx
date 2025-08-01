"use client";

import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tiltNeon } from "@/app/layout";

const faqs = [
    {
        question: "Can you build an AI model with my existing data?",
        answer:
            "Yes. We can use structured/unstructured data (Excel, PDFs, DBs, APIs) to build models.",
    },
    {
        question: "How long does it take to build an AI solution?",
        answer:
            "PoC takes 2 to 4 weeks; full models with deployment may take 6 to 12 weeks.",
    },
    {
        question: "Do I need cloud infrastructure to run the AI models?",
        answer: "No. We can deploy locally, or on AWS, GCP, or your server - fully customizable.",
    },
    {
        question: "What’s the difference between automation and AI?",
        answer:
            "Automation follows rules; AI learns and adapts. We build both.",
    },
    {
        question: "Do you offer long term model retraining & support?",
        answer:
            "Yes, including versioning, performance audits, and drift mitigation.",
    },
];

export default function FQASection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const renderQA = (item, index) => {
        const isOpen = activeIndex === index;

        return (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`border rounded-xl overflow-hidden shadow-md transition-colors duration-300 ${isOpen ? "bg-gray-800 text-white" : "bg-white text-black"
                    }`}
            >
                <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-start justify-between px-6 py-4 text-left font-medium focus:outline-none transition-all"
                >
                    <span className="text-base sm:text-lg pr-4 text-left">{item.question}</span>
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="min-w-[36px] min-h-[36px] ml-4 flex items-center justify-center rounded-full border border-gray-900 bg-white"
                    >
                        {isOpen ? (
                            <FaMinus className="text-gray-900 text-sm" />
                        ) : (
                            <FaPlus className="text-gray-900 text-sm" />
                        )}
                    </motion.span>
                </button>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="px-6 pb-5 text-md leading-relaxed"
                        >
                            {item.answer}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

    return (
        <section className="max-w-full mx-auto px-4 py-16 bg-white">
            <div className="text-center mb-12 flex flex-col items-center">
                <h1 className={`text-3xl sm:text-3xl lg:text-4xl ${tiltNeon.className}`}>
                    Frequently Asked Questions
                </h1>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.slice(0, 4).map((item, index) => renderQA(item, index))}
            </div>

            <div className="max-w-3xl mx-auto mt-8">
                {renderQA(faqs[4], 4)}
            </div>
        </section>
    );
}
