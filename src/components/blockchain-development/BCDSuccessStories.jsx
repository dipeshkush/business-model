'use client';
import Image from 'next/image';
import { tiltNeon } from '@/app/layout';

const caseStudies = [
  {
    title: 'NFT Marketplace (Ethereum)',
    desc: 'Built multi-vendor NFT minting + listing platform with WalletConnect + Stripe fiat payments',
    icon: '/icons/ethereum.png',
  },
  {
    title: 'Crypto Payroll System',
    desc: 'Automated smart contracts to release salaries in USDT for global freelancers',
    icon: '/icons/crypto-payroll.png',
  },
  {
    title: 'B2B Supply Chain on Hyperledger',
    desc: 'Immutable product tracking for Tier-1 suppliers with QR verification',
    icon: '/icons/hyperledger.png',
  },
];

export default function BlockchainSuccessStories() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className={`text-3xl md:text-3xl lg:text-4xl mb-10 text-center ${tiltNeon.variable} font-tilt-neon`}>
          Our Blockchain in Action – Success Stories
        </h2>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-12 w-full"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-in-out border border-gray-100 hover:border-indigo-500"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-indigo-600 transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800 transition">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
