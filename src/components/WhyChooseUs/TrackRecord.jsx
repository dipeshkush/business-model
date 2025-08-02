"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export default function TrackRecord({ containerVariants, itemVariants }) {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white rounded-3xl overflow-hidden px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
        >
          Real Results, Not Just Pretty Designs
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-3 sm:mt-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-300"
        >
          We don’t just get the job done - we exceed expectations. Our clients
          stay because we think long term, move fast and build with heart.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-12 bg-slate-800/50 p-4 sm:p-6 md:p-8 rounded-2xl border border-slate-700 text-left"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Main Stats */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-sm text-slate-400">Organic Traffic</p>
                <p className="text-2xl sm:text-3xl font-bold text-pink-400 mt-1">
                  <AnimatedCounter to={130} prefix="+" suffix="%" />
                </p>
                <p className="text-xs text-slate-500 mt-1">in 90 Days</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-sm text-slate-400">Conversion Rate</p>
                <p className="text-2xl sm:text-3xl font-bold text-pink-400 mt-1">
                  <AnimatedCounter to={3} isMultiplier={true} />
                </p>
                <p className="text-xs text-slate-500 mt-1">Improvement</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-sm text-slate-400">eCom Revenue</p>
                <p className="text-2xl sm:text-3xl font-bold text-pink-400 mt-1">
                  <AnimatedCounter to={12000000} isCurrency={true} />
                </p>
                <p className="text-xs text-slate-500 mt-1">via Launch</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="lg:flex lg:justify-center">
              <div className="bg-slate-900/60 p-4 sm:p-5 rounded-lg flex flex-col justify-center w-full lg:max-w-md">
                <blockquote className="text-slate-300 text-sm sm:text-base italic">
                  “WebSeeder turned our vague startup idea into a polished,
                  high converting site within 3 weeks!”
                  <cite className="mt-3 block font-semibold text-slate-400 not-italic">
                    – Amanda Lewis, Founder
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6">
            <div className="bg-slate-800 p-4 rounded-lg text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-400">
                <AnimatedCounter to={80} suffix="%" />
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Clients from Referrals
              </p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-400">5/5 ★</p>
              <p className="text-xs sm:text-sm text-slate-400">
                on Google & various platforms
              </p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-400">
                <AnimatedCounter to={5} prefix="+" />
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Clients in Countries
              </p>
            </div>
            <div className="text-center flex items-center justify-center">
              <a
                href="/contact-us"
                className="text-sm sm:text-base font-semibold text-white hover:text-pink-400 transition-colors"
              >
                Want similar outcomes? Let’s talk{" "}
                <ArrowRight className="inline w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
