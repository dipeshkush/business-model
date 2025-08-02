"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Tilt_Neon } from "next/font/google";

const tilt_neon = Tilt_Neon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tilt-neon",
  display: "swap",
});

const results = [
  {
    image: "/assets/tech/branding/1.png",
    description: "+310% Organic Traffic in 90 Days – Healthcare SEO + GMB",
  },
  {
    image: "/assets/tech/branding/2.png",
    description: "INR 3.4 Cr Revenue via PPC for Real Estate in 4 months",
  },
  {
    image: "/assets/tech/branding/3.png",
    description: "6x ROAS from Meta Ads with brand-led creatives",
  },
];

export default function Results() {
  return (
    <section className="py-20 px-6 md:px-16 text-center bg-white">
      <h2
        className={`text-3xl md:text-4xl mb-5 font-extrabold text-gray-800 ${tilt_neon.className}`}
      >
        Results That Speak – Growth We’ve Delivered
      </h2>
      <p className="mt-2 mb-10 text-gray-600 text-lg">
        Case Studies & Results from WebSeeder Clients
      </p>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">
        {results.map((result, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
          >
            <div className="mb-4">
              <Image
                src={result.image}
                alt={`Result ${idx + 1}`}
                width={200}
                height={150}
                className="mx-auto"
              />
            </div>
            <p className="text-gray-800 text-sm font-medium leading-relaxed">
              {result.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
