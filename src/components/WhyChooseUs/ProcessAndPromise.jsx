"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, ShieldCheck, Check } from "lucide-react";

export default function ProcessAndPromise({ containerVariants, itemVariants }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="space-y-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          {/* Transparent Process */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <ClipboardCheck className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
              <h2 className="text-2xl sm:text-3xl font-bold">Transparent Process</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We work in agile sprints, keep you in the loop at every milestone,
              and ensure every feature is QA tested and approved before launch.
              No guesswork.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  <span className="font-semibold">Dedicated project manager</span> to guide you.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  <span className="font-semibold">Weekly progress reports</span> so you're never in the dark.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  <span className="font-semibold">Live previews & wireframes</span> for real-time feedback.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Ownership & Support */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-pink-600" />
              <h2 className="text-2xl sm:text-3xl font-bold">Ownership & Support</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              You own your code, your domain, and your IP. We’re here for post-launch support,
              updates, and optimizations—no hidden costs.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  <span className="font-semibold">Monthly site health reports</span> to monitor performance.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  <span className="font-semibold">Speed & SEO tuning</span> to stay competitive.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  <span className="font-semibold">24-hour emergency response</span> for peace of mind.
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
