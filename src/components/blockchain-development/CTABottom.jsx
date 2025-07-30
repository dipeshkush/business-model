'use client';
import { useRef } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { motion, useInView } from 'framer-motion';
import { tiltNeon } from '@/app/layout';

export default function CTABottom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Triggers slightly before fully in view

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
       Whether it’s your first DApp, a token launch, or a full scale DeFi platform - we bring the code, clarity, and compliance.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#5B66AB] hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 transition"
        >
          <AiOutlinePhone size={18} />
          Request a Free Blockchain Strategy Call
        </motion.button>
      </motion.div>
    </div>
  );
}
