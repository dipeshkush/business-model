'use client';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tiltNeon } from '@/app/layout';

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
    answer:
      "We use both Flutter and React Native, depending on project requirements. Flutter is preferred for pixel perfect UI and performance, while React Native is great for code reusability and rapid MVPs. We’ll help you choose the right framework based on your business goals and target audience.",
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

export default function FQASection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-full mx-auto px-4 py-16 bg-white">
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
