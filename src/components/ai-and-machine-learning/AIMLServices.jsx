'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const services = [
  'Custom AI Model Development (classification, regression, anomaly detection)',
  'Recommendation Engines (Amazon-style product matching)',
  'Natural Language Processing (NLP) (chatbots, entity extraction, sentiment analysis)',
  'Computer Vision & OCR (image tagging, facial recognition, document extraction)',
  'Predictive Analytics & Forecasting (sales, demand, churn prediction)',
  'AI Chatbot Development (GPT-based, multilingual, API-integrated)',
  'AI Automation & RPA (email parsing, task triggers, low-code bots)',
];

export default function AIMLServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 px-4 text-center bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold mb-10"
      >
        AI & ML Services Offered
      </motion.h2>

      <div className="bg-[#5A59A9] max-w-2xl mx-auto text-left text-white p-8 rounded-xl shadow-md">
        {services.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex items-start gap-3 mb-4"
          >
            <FaCheck className="mt-1 text-white text-md" />
            <p className="text-sm md:text-base leading-snug">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
