"use client";

import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tiltNeon } from "@/app/layout";

const faqs = [
  {
    question: "Which blockchain platforms do you work with?",
    answer: "Ethereum, Polygon, BNB Chain, Solana and Hyperledger.",
  },
  {
    question: "Do you provide smart contract audits?",
    answer:
      "Yes. We use MythX, OpenZeppelin, and manual code review for full audit delivery.",
  },
  {
    question: "Can you integrate fiat payments in blockchain apps?",
    answer:
      "Yes, using services like Stripe, Transak and Onfido for KYC + payments.",
  },
  {
    question: "Can you build and deploy custom tokens?",
    answer:
      "Yes. ERC-20, BEP-20, NFT (ERC-721/1155), DAO tokens - all supported.",
  },
  {
    question: "What’s the typical timeline for a DApp?",
    answer: "4 to 10 weeks depending on complexity, features, and blockchain chosen.",
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
