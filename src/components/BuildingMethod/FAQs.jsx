"use client";

import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tiltNeon } from '@/app/layout';

const faqs = [
  {
    question: "Can i integrate my software with WhatsApp & Google Sheets?",
    answer:
      "Yes. We build multi-platform automations using APIs, Zapier or direct sync.",
  },
  {
    question: "Is your custom software scalable for multiple branches/teams?",
    answer:
      "Absolutely, Our systems are modular, multi-role and multi-user ready.",
  },
  {
    question: "Will i get admin access and training post deployment?",
    answer: "Yes, You'll recieve full admin access, training videos and documentations.",
  },
  {
    question: "How secure is the software?",
    answer:
      "We implement token based authentication, hashed data, RBAC and SSL protocols.",
  },
  {
    question: "Do you Sign NDAs and Support white label partnerships?",
    answer:
      "Yes. We frequently work under NDAs with agencies & startups globally.",
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
