'use client';
import Image from 'next/image';
import { tiltNeon } from '@/app/layout';

const steps = [
  {
    title: 'Discovery & Blockchain Fit Analysis',
    desc: 'Define consensus type, use case, scalability goals',
    icon: '/icons/data-visualization.png',
  },
  {
    title: 'Architecture & Tokenomics Planning',
    desc: 'Network choice, governance, economic model (if tokenized)',
    icon: '/icons/architecture.png',
  },
  {
    title: 'Smart Contract & Backend Dev',
    desc: 'Solidity or Rust + secure backend (Node.js, Firebase)',
    icon: '/icons/dev.png',
  },
  {
    title: 'DApp Frontend + Wallet Integration',
    desc: 'Web3.js + MetaMask + React UI',
    icon: '/icons/frontend.png',
  },
  {
    title: 'QA, Testnet Deployment & Audit',
    desc: 'Hardhat + Ganache for simulation, security checks',
    icon: '/icons/bug.png',
  },
  {
    title: 'Mainnet Launch + Maintenance',
    desc: 'Live deployment, performance tuning, future updates',
    icon: '/icons/launch.png',
  },
];

export default function BlockchainProcessFlow() {
  return (
    <section className="bg-[#595BA5] text-white pt-24 pb-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center pb-24 relative z-10">
          <h2 className={`text-3xl md:text-3xl lg:text-4xl mb-10 text-center ${tiltNeon.variable} font-tilt-neon`}>
            Our Process – Blockchain Development Lifecycle
          </h2>
          <p className="text-white/80 mb-6">
            How We Build Your Decentralized Solution
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
        

          {/* Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-20 gap-x-6">
            {steps.map((step, index) => {
              const isTop = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center relative ${
                    isTop ? '-translate-y-20' : 'translate-y-20'
                  }`}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md z-10">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-sm font-semibold">{step.title}</h3>

                  {/* Description */}
                  <p className="mt-1 text-xs text-white/80">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
