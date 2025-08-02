'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { tiltNeon } from '@/app/layout';
import { SiMinutemailer } from 'react-icons/si';

export default function CTASection() {
  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1b1b3a] via-[#3a3d72] to-[#2f3050] text-white px-6 py-12 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:justify-between gap-8">

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
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-end w-full md:w-auto"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center bg-[#5c66ab] hover:bg-[#394173] text-white rounded px-4 py-2 text-sm sm:text-lg shadow-lg gap-2"
          >
            Get in Touch
            <span className="relative w-[28px] h-[28px]">
              <SiMinutemailer
                size={20}
                className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              <span className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
            </span>
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
