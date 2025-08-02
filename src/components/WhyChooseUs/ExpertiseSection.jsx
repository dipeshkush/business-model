"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Award } from "lucide-react";

export default function ExpertiseSection({
  containerVariants,
  itemVariants,
  techStack,
  industries,
}) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-4xl font-bold text-black leading-tight"
        >
          Local Expertise, Global Vision
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600"
        >
          As a leading web development company in Indore, we blend the cultural
          agility of a local agency with the quality standards of a global
          studio.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 text-left"
      >
        <motion.div
          variants={itemVariants}
          className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <Layers className="w-7 h-7 sm:w-9 sm:h-9 text-pink-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              Full-Stack Expertise
            </h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
            From ReactJS frontends to Laravel backends, we use robust tech to
            deliver powerful applications with seamless performance.
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-white text-[#5c66ab] font-medium py-1 px-3 rounded-full shadow-sm border border-gray-200 text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <Award className="w-7 h-7 sm:w-9 sm:h-9 text-blue-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              Industries We Serve
            </h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
            We have a proven track record of delivering exceptional results
            across a diverse range of business sectors.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-blue-100 text-blue-900 font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg shadow-sm text-xs sm:text-sm"
              >
                {industry}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
