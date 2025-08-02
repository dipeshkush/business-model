"use client";

import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tiltNeon } from '@/app/layout';


const faqs = [
    {
        question: "What is the average cost of website development in India for small businesses?",
        answer:
            "The cost of developing a website in India typically ranges between INR 15,000 to INR 1.5 lakhs, depending on the type (static, dynamic, eCommerce, custom CMS), number of pages, design complexity and features required. Basic business sites are cheaper, while custom coded or WooCommerce sites can cost more. Want a custom quote? Get a free estimate now.",
    },
    {
        question: "Which platform is best for website development – WordPress, Laravel, or Shopify?",
        answer:
            "Each platform serves a different need:\n• WordPress: Ideal for blogs, business sites, and basic eCommerce (via WooCommerce)\n• Laravel: Perfect for scalable, custom web apps and portals\n• Shopify: Best for ready-to-launch eCommerce stores with minimal coding\nOur team helps choose the right tech stack based on your goals.",
    },
    {
        question: "How long does it take to design and develop a website in India?",
        answer: "On average, 2 to 6 weeks. Simple sites may take less, while custom development takes longer.",
    },
    {
        question: "Is SEO included in website development services?",
        answer:
            "Basic on-page SEO is usually included, but advanced SEO services are typically offered separately.",
    },
    {
        question: "Why do businesses in India need a responsive website in 2025?",
        answer:
            "Because the majority of users browse on mobile. A responsive site improves user experience, SEO, and conversions.",
    },
];

export default function FQASection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-full mx-auto px-4 py-10 bg-white">
      <div className="text-center mb-12 flex flex-col items-center">
        <h1 className={`text-3xl sm:text-3xl lg:text-4xl ${tiltNeon.className}`}>
          Frequently Asked Questions
        </h1>
      </div>

      {/* Grid: 2 Left, 2 Right */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.slice(0, 4).map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'bg-gray-800 text-white' : 'bg-white text-black'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-start justify-between px-6 py-4 text-left font-medium focus:outline-none"
              >
                <span className="text-base sm:text-lg pr-4 text-left">
                  {item.question}
                </span>
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
        })}
      </div>

      {/* Centered Bottom QA */}
      <div className="max-w-3xl mx-auto mt-8">
        {(() => {
          const index = 4;
          const item = faqs[index];
          const isOpen = activeIndex === index;
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'bg-gray-800 text-white' : 'bg-white text-black'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-start justify-between px-6 py-4 text-left font-medium focus:outline-none"
              >
                <span className="text-base sm:text-lg pr-4 text-left">
                  {item.question}
                </span>
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
        })()}
      </div>
    </section>
  );
}
