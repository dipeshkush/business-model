'use client';
import { useRef } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { motion, useInView } from 'framer-motion';

export default function CTABottom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Triggers slightly before fully in view

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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#6155D3] hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 transition"
        >
          <AiOutlinePhone size={18} />
          Talk to Our AI Team
        </motion.button>
      </motion.div>
    </div>
  );
}
