"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe } from "lucide-react";
import { SiMinutemailer } from "react-icons/si";

export default function CallToAction({ containerVariants, itemVariants }) {
  return (
    <section id="contact" className="py-10 sm:py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="text-center rounded-2xl p-6 sm:p-10 md:p-16 bg-[#5c66ab] sm:bg-[linear-gradient(rgba(92,102,171,0.85),rgba(92,102,171,0.95)),url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600')] bg-cover bg-center text-white"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          Ready to Elevate Your Digital Presence?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-gray-200"
        >
          Let’s seed your online growth with a website that delivers more than
          just traffic – it brings real business.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base"
        >
          <a
            href="tel:+917898877166"
            className="flex items-center gap-2 hover:text-pink-300 transition-colors"
          >
            <Phone size={18} />
            <span>+91 78988-77166</span>
          </a>

          <a
            href="mailto:hello@webseeder.in"
            className="flex items-center gap-2 hover:text-pink-300 transition-colors"
          >
            <Mail size={18} />
            <span>hello@webseeder.in</span>
          </a>

          <p className="flex items-center gap-2">
            <Globe size={18} />
            <span>Indore</span>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <a
            href="/contact-us"
            className="group inline-flex items-center justify-center font-semibold bg-white text-[#5c66ab] rounded px-5 py-3 text-sm sm:text-base md:text-lg shadow-lg gap-2 transition-all duration-300 transform"
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
    </section>
  );
}
