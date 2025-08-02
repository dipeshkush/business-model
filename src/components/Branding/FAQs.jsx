"use client";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tiltNeon } from '@/app/layout';


const faqs = [
  {
    question: "Do you offer combined branding + SEO packages?",
    answer:
      "Yes. Our growth kits include logo design, brand messaging, on-page SEO, and AIO friendly content.",
  },
  {
    question: "What is AIO optimization and how is it different from SEO?",
    answer:
      "AIO (AI Optimization) targets how your brand appears in tools like ChatGPT, Gemini, Copilot, etc., using structured, semantically clear content and knowledge graphs - beyond traditional Google SEO.",
  },
  {
    question: "Can I hire WebSeeder for only performance marketing or design?",
    answer:
      "Absolutely. We offer modular plans across branding, SEO, paid ads, and automation – choose what fits.",
  },
  {
    question: "How soon can I see SEO results?",
    answer:
      "SEO takes 60 to 90 days for early movement, with compounding traffic over time. We also use AIO to capture instant AI referrals.",
  },
  {
    question: "Can you redesign my brand + website together?",
    answer: "Yes, brand will own the journey. Let’s make that yours.",
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
        className={`border rounded-xl overflow-hidden shadow-md transition-colors duration-300 ${
          isOpen ? "bg-gray-800 text-white" : "bg-white text-black"
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
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden px-6 pb-5 text-md leading-relaxed"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {item.answer}
              </motion.div>
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
