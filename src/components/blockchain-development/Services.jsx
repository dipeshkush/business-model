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
    <section ref={ref} className="py-16 px-4 bg-white w-full">
      <div className="max-w-6xl mx-auto justify-center items-center flex flex-col">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold"
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

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-start gap-4 max-w-md w-full mx-auto"
            >
              <Image
                src={`/icons/${service.icon}`}
                alt={service.title}
                width={40}
                height={40}
              />
              <div className="text-left">
                <h3 className={`font-semibold text-lg ${service.color}`}>{service.title}</h3>
                <p className="text-md text-gray-600">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Last item centered below */}
        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 6 * 0.15 }}
            className="flex items-start gap-4 max-w-md w-full mx-auto"
          >
            <Image
              src={`/icons/${services[6].icon}`}
              alt={services[6].title}
              width={40}
              height={40}
            />
            <div className="text-left">
              <h3 className={`font-semibold text-lg ${services[6].color}`}>{services[6].title}</h3>
              <p className="text-md text-gray-600">{services[6].desc}</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
