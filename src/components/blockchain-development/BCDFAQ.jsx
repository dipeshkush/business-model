"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Which blockchain platforms do you work with?",
        answer:
            "Ethereum, Polygon, BNB Chain, Solana and Hyperledger.",
    },
    {
        question: "Do you provide smart contract audits?",
        answer:
            "Yes. We use MythX, OpenZeppelin, and manual code review for full audit delivery.",
    },
    {
        question: "Can you integrate fiat payments in blockchain apps?",
        answer: "Yes, using services like Stripe, Transak and Onfido for KYC + payments.",
    },
    {
        question: "Can you build and deploy custom tokens?",
        answer:
            "Yes. ERC-20, BEP-20, NFT (ERC-721/1155), DAO tokens - all supported.",
    },
    {
        question: "What’s the typical timeline for a DApp?",
        answer:
            "4 to 10 weeks depending on complexity, features, and blockchain chosen.",
    },
];

export default function BCDFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-6 bg-white min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">
                    Frequently Asked <br className="md:hidden" /> Questions
                </h2>

                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 rounded-2xl p-6 cursor-pointer transition-shadow duration-400 shadow-sm hover:shadow-md"
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
                                    <ChevronUp className="w-7 h-7 text-blue-600" />
                                ) : (
                                    <ChevronDown className="w-7 h-7 text-blue-600" />
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
                                        {typeof faq.answer === "string" && faq.answer.includes("•") ? (
                                            <ul className="list-disc list-inside space-y-2">
                                                {faq.answer
                                                    .split("\n")
                                                    .filter((line) => line.trim().startsWith("•"))
                                                    .map((line, i) => (
                                                        <li key={i}>{line.replace("•", "").trim()}</li>
                                                    ))}
                                            </ul>
                                        ) : (
                                            <p>{faq.answer}</p>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
