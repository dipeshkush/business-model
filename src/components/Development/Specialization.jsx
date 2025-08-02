"use client";

import { motion } from "framer-motion";
import Image from "next/image";


import { Tilt_Neon } from "next/font/google";

const tilt_neon = Tilt_Neon({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-tilt-neon",
    display: "swap",
});

const services = [
  {
    title: "Corporate Website Design",
    description:
      "Professional, fast-loading websites tailored for enterprises to establish authority and drive engagement.",
    image: "/assets/Dev/Website setup-cuate.png",
  },
  {
    title: "eCommerce Website Development",
    description:
      "SEO-friendly online stores with cart, payment, inventory, and shipping modules for seamless selling.",
    image: "/assets/Dev/Ecommerce checkout laptop-cuate.png",
  },
  {
    title: "Portfolio & Catalogue Websites",
    description:
      "Visually rich websites to showcase your work or products. Perfect for freelancers, agencies, or creatives.",
    image: "/assets/Dev/Portfolio Update-cuate.png",
  },
  {
    title: "Landing Page Design",
    description:
      "Conversion-focused landing pages for lead generation, product launches, or marketing campaigns.",
    image: "/assets/Dev/Landing page-bro.png",
  },
  {
    title: "Blog & News Website Design",
    description:
      "Clean and scalable blog layouts for content-heavy platforms, publishers, and thought leaders.",
    image: "/assets/Dev/Content-bro.png",
  },
  {
    title: "Video Content Website",
    description:
      "Stream-ready platforms for educators, creators, or video-based services. Fast and responsive design.",
    image: "/assets/Dev/Content creator-bro.png",
  },
];


const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function SpecializedServices() {
    return (
        <section className="bg-blue-50 px-4 py-20 min-h-screen overflow-hidden">
            <motion.h2
                className={`mb-12 text-4xl sm:text-5xl lg:text-6xl text-center ${tilt_neon.className}`}
                style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Explore Our <span className="text-blue-600">Specialized</span> <br /> Web Design Services
            </motion.h2>

            <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                {services.map(({ title, description, image }, index) => (
                    <motion.article
                        key={index}
                        variants={cardVariant}
                        className="group bg-white/30 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 max-w-sm mx-auto"
                    >
                        {/* Image - circular and elevated */}
                        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-md border-4 border-white">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600">{description}</p>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}
