"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tiltNeon } from "@/app/layout";

const faqs = [
    {
        question: "What is hybrid app development and how is it different from native development?",
        answer:
            "Hybrid app development allows a single codebase to run on both Android and iOS platforms using frameworks like Flutter, React Native or Ionic. Unlike native apps - which require separate development for each platform - hybrid apps are more cost effective and quicker to deploy, while still delivering near native performance.",
    },
    {
        question: "How much does hybrid app development cost in India?",
        answer:
            "The cost of a hybrid app depends on features, complexity, and integrations. At WebSeeder, our pricing starts from INR 40000 for basic MVPs, while full scale hybrid apps with backend APIs and offline support may range between INR 90000 to 1.5 Lakhs+. You’ll receive a custom quote after your free consultation.",
    },
    {
        question: "Which hybrid frameworks do you use - Flutter or React Native?",
        answer: "We use both Flutter and React Native, depending on project requirements. Flutter is preferred for pixel perfect UI and performance, while React Native is great for code reusability and rapid MVPs. We’ll help you choose the right framework based on your business goals and target audience.",
    },
    {
        question: "Will my hybrid app look and work like a native app?",
        answer:
            "Absolutely. With modern UI toolkits and access to native APIs, hybrid apps today feel just like native apps in terms of speed, navigation and responsiveness. We ensure your app passes Core Web Vitals, supports native gestures and works seamlessly on all screen sizes.",
    },
    {
        question: "Can WebSeeder handle publishing the app on the Play Store and App Store?",
        answer:
            "Yes, we offer complete end-to-end hybrid app development, including testing, optimization and app store deployment. We’ll also guide you through policies, screenshots, ASO and help with future updates and maintenance post launch.",
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
                <div className="flex justify-center text-center mb-16">
                    <h2 className={`text-3xl sm:text-3xl lg:text-4xl ${tiltNeon.className}`}>
                        Frequently Asked <br className="md:hidden" /> Questions
                    </h2>
                </div>
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
                                ${isLastOdd
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
