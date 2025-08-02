"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt_Neon } from "next/font/google";

const tilt_neon = Tilt_Neon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tilt-neon",
  display: "swap",
});

const techData = [
  {
    category: "SEO & AIO",
    items: [
      { name: "Ahrefs", icon: "/assets/Branding/ahrefs.png" },
      { name: "SEMrush", icon: "/assets/tech/branding/Ellipse 16 (2).png" },
      { name: "Screaming Frog", icon: "/assets/Branding/Screaming-Frog.png" },
      { name: "Surfer SEO", icon: "/assets/Branding/surfer-seo.webp" },
      { name: "NeuronWriter", icon: "/assets/Branding/neuronwriter.png" },
      { name: "ChatGPT", icon: "/assets/tech/automation-ai/chatGPT.png" },
      { name: "Jasper", icon: "/assets/Branding/Jasper-ai-logo2.png" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Adobe CC", icon: "/assets/Branding/Adobe cc.jpg" },
      { name: "Figma", icon: "/assets/tech/figma.png" },
      { name: "Canva Pro", icon: "/assets/Branding/canva.png" },
    ],
  },
  {
    category: "Analytics",
    items: [
      { name: "GA4", icon: "/assets/Branding/ga4.jpg" },
      { name: "Search Console", icon: "/assets/Branding/searchConsole.webp" },
      { name: "Looker Studio", icon: "/assets/Branding/looker-studio.png" },
    ],
  },
  {
    category: "Automation",
    items: [
      { name: "Zapier", icon: "/assets/tech/automation-ai/zapier-icon.svg" },
      { name: "Make", icon: "/assets/tech/automation-ai/make.png" },
      { name: "ConvertKit", icon: "/assets/Branding/convertkit.png" },
    ],
  },
  {
    category: "CMS",
    items: [
      { name: "WordPress", icon: "/assets/tech/e-com/wordpress-icon-1.svg" },
      { name: "Webflow", icon: "/assets/Branding/webflow.png" },
      { name: "Framer", icon: "/assets/Branding/framer.webp" },
    ],
  },
];


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("SEO & AIO");
  const currentCategory = techData.find((section) => section.category === activeTab);

  return (
    <section className="relative bg-white py-24 px-6 md:px-20 lg:px-32 overflow-hidden">
      <h2 className={`text-3xl md:text-4xl text-center mb-5 font-extrabold text-gray-800 ${tilt_neon.className}`}>
        Tools & Tech Stack We Use
      </h2>
      <p className="text-center md:font-semibold mb-16 text-gray-800">
        Creative meets data – <br /> Powered by the right tools
      </p>

      {/* Tabs */}
      <div className="border-b border-b-gray-300 px-6 py-4 mb-12 flex flex-wrap justify-center gap-6">
        {techData.map((section) => (
          <button
            key={section.category}
            onClick={() => setActiveTab(section.category)}
            className={`cursor-pointer relative text-lg font-medium transition-all duration-300 ${activeTab === section.category ? "text-blue-700" : "text-gray-600 hover:text-blue-700"
              }`}
          >
            <span className="relative group">
              {section.category}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-700 transition-all duration-300 ${activeTab === section.category ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {currentCategory?.items.map((item, idx) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={idx}
              className="flex items-center gap-3 bg-white shadow px-5 py-3 rounded-xl"
            >
              <Image src={item.icon} alt={item.name} width={28} height={28} className="object-contain" />
              <span className="text-base font-medium text-gray-700">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TechStack;
