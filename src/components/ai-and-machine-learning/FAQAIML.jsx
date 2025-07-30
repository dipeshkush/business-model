"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-xl md:text-2xl font-semibold mb-12">
                    Frequently Asked <br className="md:hidden" /> Questions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqs.map((faq, index) => {
                        const isLastOdd =
                            faqs.length % 2 !== 0 &&
                            index === faqs.length - 1 &&
                            faqs.length > 1;

                        return (
                            <div
                                key={index}
                                className={`bg-gray-100 rounded-2xl p-5 cursor-pointer transition-shadow duration-400 shadow-sm hover:shadow-md 
                                ${
                                    isLastOdd
                                        ? "md:col-span-2 md:w-[48%] md:mx-auto"
                                        : ""
                                }`}
                                onClick={() => toggleFAQ(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        toggleFAQ(index);
                                    }
                                }}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-panel-${index}`}
                                aria-labelledby={`faq-header-${index}`}
                            >
                                <div className="flex justify-between items-center">
                                    <h3
                                        id={`faq-header-${index}`}
                                        className="font-semibold text-base md:text-md text-gray-900 max-w-[85%]"
                                    >
                                        {faq.question}
                                    </h3>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-6 h-6 text-gray-600" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-grya-600" />
                                    )}
                                </div>

                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            id={`faq-panel-${index}`}
                                            className="mt-6 text-sm md:text-md text-gray-700 leading-relaxed whitespace-pre-wrap"
                                            key="content"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <p>{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
