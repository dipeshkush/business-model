'use client';

import { SiMinutemailer } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="w-full py-12 px-4 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg font-bold text-gray-900"
        >
          Launch Your App with <span className="text-black">WebSeeder Today</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base text-gray-700 mt-4"
        >
          Ready to build a high performance app that works <br className="hidden sm:block" />
          across platforms without breaking the bank?
        </motion.p>

        {/* Let’s Connect */}
        <motion.h3
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-2xl font-bold text-[#6155D3] mt-8 flex items-center justify-center gap-2"
        >
          <span role="img" aria-label="rocket">🚀</span>
          <span className="underline">Let’s Connect</span>
        </motion.h3>

        {/* Support Text */}
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base text-gray-800 mt-4"
        >
          Have questions or ready to get started? <br />
          Our experts will reach out shortly
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 flex justify-center"
        >
          <a
            href="/contact-us"
            className="group inline-flex items-center justify-center font-bold bg-[#5c66ab] hover:bg-[#394173] text-white rounded px-5 py-3 text-sm sm:text-base font-semibold shadow-md gap-2 transition-all duration-300 "
          >
            Request Callback
            <span className="relative w-[28px] h-[28px]">
              <SiMinutemailer
                size={20}
                className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              <span className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
