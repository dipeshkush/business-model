"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Code, Palette, BarChart } from "lucide-react";
import { SiMinutemailer } from "react-icons/si";

export default function HeroSection({ containerVariants, itemVariants }) {
  return (
    <section className="py-10 sm:py-14 md:py-20 min-h-screen">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center px-4 sm:px-6 md:px-8">
        {/* Text Section */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight"
          >
            Why Choose <span className="text-[#5c66ab]">WebSeeder?</span>
          </motion.h1>

          <div className="space-y-7 mt-4 sm:mt-8">
            <motion.p variants={itemVariants} className="max-w-xl text-base sm:text-xl text-black font-semibold">
              Crafting Digital Experiences That Grow With You.
            </motion.p>

            <motion.p variants={itemVariants} className="max-w-xl text-sm sm:text-lg text-gray-600">
              At WebSeeder, we don't just build websites - we architect digital ecosystems that perform, adapt and deliver results.
            </motion.p>

            <motion.p variants={itemVariants} className="max-w-xl text-sm sm:text-lg text-gray-600">
              From startups in Indore to scale-ups across the globe, we partner with forward-thinking brands to craft online experiences that are fast, fluid and future-ready.
            </motion.p>
          </div>


          <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
            <a
              href="/contact-us"
              className="group inline-flex items-center justify-center font-semibold bg-[#5c66ab] hover:bg-[#394173] text-white rounded px-4 py-3 text-sm sm:text-lg shadow-lg gap-2 transition-all duration-300 transform"
            >
              Let’s Discuss Your Project
              <span className="plane-wrapper relative w-[30px] h-[30px]">
                <SiMinutemailer
                  size={24}
                  className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                <span className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-trail-glow"></span>
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-2xl border shadow-xl"
          >
            <BrainCircuit className="w-8 h-8 text-pink-600 mb-3" />
            <h4 className="font-semibold text-base text-black mb-1">
              Conversion Strategy
            </h4>
            <p className="text-sm text-gray-600 leading-snug">
              Psychology-driven UX to maximize engagement.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-2xl border shadow-xl"
          >
            <Code className="w-8 h-8 text-blue-800 mb-3" />
            <h4 className="font-semibold text-base text-black mb-1">
              Full-Stack Expertise
            </h4>
            <p className="text-sm text-gray-600 leading-snug">
              Robust, scalable, and future-proof development.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-2xl border shadow-xl"
          >
            <Palette className="w-8 h-8 text-blue-800 mb-3" />
            <h4 className="font-semibold text-base text-black mb-1">
              Custom-Built Design
            </h4>
            <p className="text-sm text-gray-600 leading-snug">
              Tailored visuals that embody your brand identity.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-2xl border shadow-xl"
          >
            <BarChart className="w-8 h-8 text-pink-600 mb-3" />
            <h4 className="font-semibold text-base text-black mb-1">
              Data-Driven Results
            </h4>
            <p className="text-sm text-gray-600 leading-snug">
              Analytics and SEO integrated from day one.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
