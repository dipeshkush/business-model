'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { tiltNeon } from '@/app/layout'; 

const industries = [
  {
    title: 'FinTech',
    desc: 'DeFi apps, crypto lending, wallets',
    icon: '/icons/fintech.png',
    bg: 'bg-purple-100',
  },
  {
    title: 'Real Estate',
    desc: 'Tokenized ownership, smart lease contracts',
    icon: '/icons/realestate.png',
    bg: 'bg-blue-100',
  },
  {
    title: 'Supply Chain',
    desc: 'Provenance tracking, audit trails',
    icon: '/icons/supplychain.png',
    bg: 'bg-orange-100',
  },
  {
    title: 'Healthcare',
    desc: 'Patient record security, NFT-based licenses',
    icon: '/icons/healthcare.png',
    bg: 'bg-yellow-100',
  },
  {
    title: 'Legal & Compliance',
    desc: 'Timestamped contracts, legal registries',
    icon: '/icons/gavel.png',
    bg: 'bg-green-100',
  },
  {
    title: 'eCommerce',
    desc: 'Crypto payment integration, loyalty NFTs',
    icon: '/icons/ecommerce.png',
    bg: 'bg-sky-100',
  },
];

export default function BlockchainIndustries() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className={`text-3xl md:text-3xl lg:text-4xl mb-10 text-center ${tiltNeon.variable} font-tilt-neon`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Industries We Empower with Blockchain
        </motion.h2>

        <motion.p
          className="text-gray-500 mt-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Blockchain Use Cases by Industry
        </motion.p>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-3 items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-full ${industry.bg} flex items-center justify-center mb-3`}>
                <Image
                  src={industry.icon}
                  alt={industry.title}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{industry.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
