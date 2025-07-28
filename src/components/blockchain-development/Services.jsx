'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const services = [
  {
    icon: 'Custom DApp Development.png',
    color: 'text-[#27AEDB]',
    lineColor: 'bg-[#27AEDB]',
    title: 'Custom DApp Development',
    desc: 'Frontend + backend decentralized apps',
  },
  {
    icon: 'Smart Contract Development.png',
    color: 'text-[#3CC583]',
    lineColor: 'bg-[#3CC583]',
    title: 'Smart Contract Development',
    desc: 'Secure, gas-optimized contracts in Solidity/ Rust',
  },
  {
    icon: 'Enterprise Blockchain Solutions.png',
    color: 'text-[#92BD39]',
    lineColor: 'bg-[#92BD39]',
    title: 'Enterprise Blockchain Solutions',
    desc: 'Hyperledger Fabric, permissioned ledgers',
  },
  {
    icon: 'Token Development (ERC-20, BEP-20, NFT).png',
    color: 'text-[#E0CB15]',
    lineColor: 'bg-[#E0CB15]',
    title: 'Token Development (ERC-20, BEP-20, NFT)',
    desc: 'Launch custom utility or governance tokens',
  },
  {
    icon: 'Crypto Wallet Development.png',
    color: 'text-[#DE8431]',
    lineColor: 'bg-[#DE8431]',
    title: 'Crypto Wallet Development',
    desc: 'Web + mobile wallets with private key security',
  },
  {
    icon: 'Web3 Integration.png',
    color: 'text-[#DE58A9]',
    lineColor: 'bg-[#DE58A9]',
    title: 'Web3 Integration',
    desc: 'WalletConnect, MetaMask, blockchain APIs',
  },
  {
    icon: 'Vector.png',
    color: 'text-[#E55753]',
    lineColor: 'bg-[#E55753]',
    title: 'Smart Contract Auditing',
    desc: 'Security, gas analysis, and testing with MythX + Hardhat',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Our Blockchain Development Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-gray-600 mt-3"
        >
          Explore Our Blockchain Capabilities
        </motion.p>
      </div>

      {/* Table-like layout */}
      <div className="grid gap-2 justify-center max-w-3xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="grid grid-cols-[auto_8px_1fr] items-center gap-6"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src={`/icons/${service.icon}`}
                alt={service.title}
                width={32}
                height={32}
              />
            </div>

            {/* Vertical Line */}
            <div className={`h-12 w-0.5 rounded-full ${service.lineColor}`} />

            {/* Title + Description */}
            <div>
              <h3 className={`font-semibold text-lg ${service.color}`}>
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
