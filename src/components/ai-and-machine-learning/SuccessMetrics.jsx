'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const metrics = [
  {
    percentage: '60%',
    text: 'faster customer response using AI-driven chatbots',
  },
  {
    percentage: '92%',
    text: 'document processing accuracy with invoice OCR model',
  },
  {
    percentage: '40%',
    text: 'increase in upsells using product recommendation engine',
  },
  {
    percentage: '80%',
    text: 'reduction in manual tagging with computer vision models',
  },
];

export default function SuccessMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-4 bg-white text-center">
      {/* Headings */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold"
      >
        Success Metrics
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-500 mt-2 mb-12"
      >
        What Our AI Projects Have Delivered
      </motion.p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-2xl font-bold text-black mb-2">{metric.percentage}</div>
            <p className="text-sm text-gray-700">{metric.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
