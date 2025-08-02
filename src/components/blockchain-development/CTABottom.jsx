'use client';
import { useRef } from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { motion, useInView } from 'framer-motion';
import { tiltNeon } from '@/app/layout';

export default function CTABottom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="text-center py-16 px-4 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-3xl lg:text-4xl mb-10 text-center ${tiltNeon.variable} font-tilt-neon`}
      >
        Ready to Launch on the Blockchain? Let’s Build It Right.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-700 text-sm md:text-sm max-w-xl mx-auto mb-6"
      >
        Whether it’s your first DApp, a token launch, or a full scale DeFi platform – we bring the code, clarity, and compliance.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center"
      >
        <a
          href="/contact-us"
          className="group inline-flex items-center justify-center bg-[#5c66ab] hover:bg-[#394173] text-white rounded px-4 py-2 text-sm sm:text-lg shadow-lg gap-2 transition-all duration-300 transform"
        >
          Request a Free Blockchain Strategy Call
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
