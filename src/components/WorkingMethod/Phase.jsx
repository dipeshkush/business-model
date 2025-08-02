"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Tilt_Neon } from "next/font/google";

const tilt_neon = Tilt_Neon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tilt-neon",
  display: "swap",
});

const imagePathMap = {
  "Google Meet": "/assets/logos/google-meet.png",
  "Notion": "/assets/logos/notion.png",
  "Figma": "/assets/logos/figma.png",
  "Whimsical": "/assets/logos/whimsical.png",
  "Adobe XD": "/assets/logos/adobeXD.png",
  "VS Code": "/assets/logos/vsCode.png",
  "React": "/assets/logos/reactjs.png",
  "BrowserStack": "/assets/logos/browserStack.png",
  "PageSpeed": "/assets/logos/pageSpeed.webp",
  "Lighthouse": "/assets/logos/lightHouse.png",
  "AWS": "/assets/logos/aws.png",
  "Hostinger": "/assets/logos/hostinger.png",
};

const phases = [
  {
    title: "Discovery",
    tools: ["Google Meet", "Notion"],
    deliverable: "Project Brief + Estimate",
  },
  {
    title: "Wireframe",
    tools: ["Figma", "Whimsical"],
    deliverable: "Clickable Prototype",
  },
  {
    title: "Design",
    tools: ["Figma", "Adobe XD"],
    deliverable: "Final UI Screens",
  },
  {
    title: "Development",
    tools: ["VS Code", "React"],
    deliverable: "Staging Link",
  },
  {
    title: "Testing",
    tools: ["BrowserStack", "PageSpeed", "Lighthouse"],
    deliverable: "QA & Optimization Report",
  },
  {
    title: "Launch",
    tools: ["Hostinger", "AWS"],
    deliverable: "Live Deployment + Access Docs",
  },
];

export default function Phase() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`text-2xl md:text-4xl font-black text-white mt-4 mb-8 text-center ${tilt_neon.className}`}
      >
        Visual Breakdown of Our Development Process
      </motion.h1>

      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-10 max-w-7xl relative">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative flex flex-col items-center group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-72"
            >
              <div className="flex flex-col justify-between h-64 bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-xl transition-all duration-300">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    {phase.title}
                  </h2>
                  <p className="text-sm text-gray-400 font-medium mb-2">Tools:</p>
                  <ul className="text-sm text-gray-300 space-y-2 mb-3">
                    {phase.tools.map((tool, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Image
                          src={imagePathMap[tool]}
                          alt={tool}
                          width={20}
                          height={20}
                          className="rounded-sm"
                        />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">
                    Deliverable:
                  </p>
                  <p className="text-sm text-gray-300">{phase.deliverable}</p>
                </div>
              </div>
            </motion.div>

            {index < phases.length - 1 && (
              <>
                <div className="sm:hidden flex justify-center mt-2">
                  <ArrowDown className="text-gray-400 w-5 h-5" />
                </div>
                <div className="hidden sm:flex items-center justify-center absolute top-1/2 right-[-28px] transform -translate-y-1/2">
                  <ArrowRight className="text-gray-400 w-5 h-5" />
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
