'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SiMinutemailer } from 'react-icons/si';
import Image from 'next/image';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AIMLHero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const [showButton, setShowButton] = useState(false); // Controls button animation

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.from(headingRef.current, { opacity: 0, y: 40 })
        .from(subHeadingRef.current, { opacity: 0, y: 30 }, '-=0.6')
        .from(paragraphRef.current, { opacity: 0, y: 30 }, '-=0.5')
        .add(() => setShowButton(true)); // Trigger button animation after GSAP completes
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20"
    >
      {/* Mobile Background */}
      <div className="absolute inset-0 -z-10 block md:hidden bg-gradient-to-tr from-[#0B1721] to-[#1FA2A2]" />

      {/* Desktop Background */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src="/aiml.webp"
          alt="AI ML Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-16 mx-auto">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug"
          >
            <span className="text-[#8d91d2]">AI & Machine Learning</span>
            <br />
            Solutions Company in Indore
          </h1>

          <p
            ref={subHeadingRef}
            className="text-white mt-3 text-base sm:text-lg font-medium"
          >
            Automate. Predict. Scale with Intelligence.
          </p>

          <p
            ref={paragraphRef}
            className="mt-6 text-gray-200 text-sm sm:text-base leading-relaxed"
          >
            At WebSeeder, we engineer AI and Machine Learning solutions that help businesses automate decisions,
            predict outcomes, and unlock efficiency.
            <br /><br />
            From AI chatbots and recommendation engines to predictive analytics and computer vision apps,
            we design intelligent systems that learn, adapt, and scale with your business.
            Whether you're an enterprise optimizing operations or a startup disrupting an industry,
            our Indore-based AI team brings deep expertise in Python, TensorFlow, GPT APIs, NLP, and computer vision — delivering outcomes, not just algorithms.
          </p>

          {/* Button appears after GSAP animations */}
          {showButton && (
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="mt-8 sm:mt-10"
            >
              <a
                href="/contact-us"
                className="group inline-flex items-center justify-center bg-[#5c66ab] hover:bg-[#394173] text-white rounded px-4 py-2 text-sm sm:text-lg shadow-lg gap-2 transition-all duration-300 transform"
              >
                Book a Free AI Demo
                <span className="plane-wrapper relative w-[30px] h-[30px]">
                  <SiMinutemailer
                    size={24}
                    className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                  <span className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-trail-glow"></span>
                </span>
              </a>
            </motion.div>
          )}
        </div>

        {/* Right filler block */}
        <div className="w-full md:w-1/2 hidden md:block" />
      </div>
    </section>
  );
}
