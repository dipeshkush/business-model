"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SiMinutemailer } from "react-icons/si";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const router = useRouter();
  const handleClick = () => router.push("/contact-us");

  return (
    <section
      className="relative w-full py-16 bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{ backgroundImage: "url('/assets/Branding/bg.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="absolute inset-0 block md:hidden backdrop-blur-[10px] z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="max-w-5xl text-left ml-0 md:ml-10 lg:ml-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.h1
            variants={textVariant}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-snug"
          >
            Build Your Brand <br />
            <span className="text-[#8d91d2]">Online in Indore</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={textVariant}
            className="text-white text-base sm:text-lg mt-6 sm:mt-8 max-w-2xl"
          >
            At WebSeeder, we go beyond websites – we build brands that speak, rank and convert.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={textVariant}
            className="text-sm sm:text-base text-white leading-relaxed mt-4 max-w-2xl"
          >
            Our integrated branding and digital marketing services combine creative strategy,
            data driven SEO and AIO with LLM content & automation to deliver full spectrum
            visibility and growth. Whether you're a startup launching your identity or an
            enterprise looking to scale through omnichannel digital strategies – we craft brand
            experiences that stick and strategies that scale.
          </motion.p>

          {/* Subheading */}
          <motion.h2
            variants={textVariant}
            className="mt-8 text-lg sm:text-xl font-semibold text-white"
          >
            Brand. Rank. Grow. We Build Brands for the Digital Age
          </motion.h2>

          {/* Small Note */}
          <motion.p
            variants={textVariant}
            className="text-gray-100 text-sm mt-1"
          >
            From identity design to AIO Search Results (Modern SEO), <br /> we help you grow with
            branding that performs and marketing that converts.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="mt-8 sm:mt-10"
          >
            <a
              href="/contact-us"
              className="group inline-flex items-center justify-center bg-[#5c66ab] hover:bg-[#394173] text-white rounded px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg shadow-lg gap-2 transition-all duration-300 transform"
            >
              Get Started
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
      </div>
    </section>
  );
};

export default Hero;
