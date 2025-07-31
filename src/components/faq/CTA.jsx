'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { tiltNeon } from '@/app/layout';

export default function CTASection() {
  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-12 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:justify-between gap-8">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left flex-1"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${tiltNeon.variable} font-tilt-neon mb-4`}>
            Have a project in mind?
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto md:mx-0">
            Let’s build something extraordinary together — tailored to your goals, engineered for performance, and ready to scale with your growth.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-end w-full md:w-auto"
        >
          <Link href="/contact">
            <button className="bg-white text-[#1A1A40] font-medium text-base px-6 py-3 rounded-full shadow hover:shadow-lg transition-all duration-300">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
