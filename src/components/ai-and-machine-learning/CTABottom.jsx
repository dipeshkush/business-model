'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiMinutemailer } from 'react-icons/si';

export default function CTABottom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="text-center py-16 px-4 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-2xl font-semibold text-gray-900 mb-4"
      >
        Your Data is Speaking. Let AI Help You Listen.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-700 text-sm md:text-sm max-w-xl mx-auto mb-6"
      >
        Let’s build an intelligent system that works 24x7, improves with time, and gives your business a competitive edge.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center"
      >
        <a
          href="/contact-us"
          className="group inline-flex items-center justify-center font-bold bg-[#5058a0] hover:bg-[#394173] text-white rounded px-5 py-3 text-sm sm:text-base shadow-md gap-2 transition-all duration-300 transform "
        >
          Let’s Discuss Your Project
          <span className="relative w-[28px] h-[28px]">
            <SiMinutemailer
              size={24}
              className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
            <span className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
          </span>
        </a>
      </motion.div>
    </div>
  );
}
