"use client";

import { motion } from "framer-motion";
import { Tilt_Neon } from "next/font/google";
import { SiMinutemailer } from "react-icons/si";
import { useRouter } from "next/navigation";

// Font setup
const tilt_neon = Tilt_Neon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tilt-neon",
  display: "swap",
});

// Animation Variants
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const router = useRouter();
  const handleClick = () => router.push("/contact-us");

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{ backgroundImage: "url('/assets/BuildingMethod/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="absolute inset-0 block md:hidden backdrop-blur-[10px] z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 text-left mt-6">
            <motion.h1
              variants={textVariant}
              className={`text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-snug ${tilt_neon.variable}`}
            >
              <span className="text-[#8d91d2]">Software</span> That Works Like
              Your <span className="text-[#8d91d2]">Best Hire</span>
            </motion.h1>

            <motion.p
              variants={textVariant}
              className="text-gray-100 text-base sm:text-lg mt-8 max-w-xl"
            >
              Custom-built, automation-ready software that eliminates bottlenecks,
              syncs your systems, and drives scale – all engineered by Indore’s
              most trusted tech team.
            </motion.p>

            <motion.p
              variants={textVariant}
              className="text-gray-100 text-sm sm:text-base leading-relaxed mt-4 max-w-xl"
            >
              At WebSeeder, we design intelligent custom software that’s tailor-made
              to your business logic. Whether you're automating workflows, digitizing
              paper-based ops or unifying tools into one dashboard – we don’t sell
              templates. We build solutions that think, scale, and solve.
            </motion.p>

            <motion.h2
              variants={textVariant}
              className="mt-8 font-semibold text-lg sm:text-xl text-gray-100"
            >
              Custom Software + Smart Automation = 10X Productivity
            </motion.h2>

            <motion.p
              variants={textVariant}
              className="text-gray-200 text-sm mt-1"
            >
              One codebase. Infinite integrations. Zero guesswork.
            </motion.p>

            {/* CTA BUTTON */}
            <motion.div
              variants={textVariant}
              className="mt-8 sm:mt-10 mb-5"
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
          </div>

          {/* RIGHT ANIMATION PLACEHOLDER */}
          <motion.div
            variants={fadeInRight}
            className="w-full md:w-1/2 h-[300px] lg:h-[400px] hidden md:flex items-center justify-center"
          >
            {/* Optional 3D/Illustration/Image */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
