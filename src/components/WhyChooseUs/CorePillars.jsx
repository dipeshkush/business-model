"use client";

import React from "react";
import { motion } from "framer-motion";
import { DraftingCompass, Zap, Search, BrainCircuit } from "lucide-react";

export default function CorePillars({ containerVariants, itemVariants }) {
  return (
    <section className="py-10 bg-transparent sm:bg-slate-50 sm:rounded-3xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center mb-12 sm:mb-16 px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-4xl font-bold text-black tracking-tight"
        >
          What Sets Us Apart?
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-lg text-gray-600"
        >
          Our approach is built on four core pillars that ensure your digital
          presence is powerful, profitable, and future-proof.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4"
      >
        {/* Card 1 */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-pink-100 mb-4 sm:mb-5">
            <DraftingCompass className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
            Custom Built, Not Cookie Cutter
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Unlike agencies that push template based sites, we build custom
            solutions from the ground up. Every pixel, line of code and user
            flow is tailored to your business goals - no shortcuts.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-100 mb-4 sm:mb-5">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
            Performance That Converts
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Our websites load in under 2 seconds, pass Core Web Vitals and are
            optimized for mobile first indexing because speed is revenue.
          </p>
          <blockquote className="mt-3 sm:mt-4 border-l-4 border-blue-200 pl-3 sm:pl-4 text-xs sm:text-sm italic text-gray-500">
            “A 1-second delay can reduce conversions by 20%” - Google Data
          </blockquote>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 mb-4 sm:mb-5">
            <Search className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
            SEO First Engineering
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Every project starts with search in mind. We implement technical
            SEO, on-page optimization and schema markup from day one so your
            website doesn’t just look good - it ranks.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-violet-100 mb-4 sm:mb-5">
            <BrainCircuit className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
            Conversion Driven UI/UX
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Design isn’t just visual - it’s psychological. Our UX strategy
            focuses on micro interactions, FOMO triggers and scroll behavior to
            maximize conversions and reduce bounce rates.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
