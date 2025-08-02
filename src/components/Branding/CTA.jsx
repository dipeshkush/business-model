"use client";

import { Phone, Send } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const CTA = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact-us");
  };

  return (
    <section className="bg-white py-20 px-4 text-center"> {/* Removed flex and vertical centering */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Let’s Build a Brand That Wins Rankings & Revenue
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6 text-sm md:text-base">
          Your audience is searching. Your competitors are bidding. But only one
          brand will own the journey. Let’s make that yours.
        </p>

        {/* Button - Horizontally Centered */}
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:px-3 hover:py-3 hover:rounded-full mx-auto" // mx-auto centers horizontally
        >
          <span className="transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-0">
            Request SEO & AIO Audit
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100">
            <Phone className="h-5 w-5" />
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
