'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaCode,
  FaRocket,
  FaWrench,
  FaMobileAlt,
  FaCheckCircle,
  FaCloud,
  FaBug,
  FaTools,
  FaSyncAlt,
} from 'react-icons/fa';
import { tiltNeon } from '@/app/layout';

const iconStyle = 'text-[#5A59A9] text-lg md:text-xl mt-[2px]';

const cardData = [
  {
    title: 'Why Hybrid Mobile Apps are the Future',
    img: '/icons/card1.png',
    points: [
      {
        text: 'Cost Efficient  One codebase for both iOS & Android',
        icon: <FaCode className={iconStyle} />,
      },
      {
        text: 'Faster Time to Market  30 to 40% faster deployment',
        icon: <FaRocket className={iconStyle} />,
      },
      {
        text: 'Easy Maintenance  Single app = easier updates & lower costs',
        icon: <FaWrench className={iconStyle} />,
      },
    ],
  },
  {
    title: 'Why WebSeeder is Your Go To Hybrid App Development Partner in Indore',
    img: '/icons/card2.png',
    points: [
      {
        text: 'Full Stack Expertise (Flutter, React Native, Ionic)',
        icon: <FaCode className={iconStyle} />,
      },
      {
        text: 'Pixel Perfect UI/UX optimized for all screens',
        icon: <FaMobileAlt className={iconStyle} />,
      },
      {
        text: 'Offline Capability and PWA ready builds',
        icon: <FaCloud className={iconStyle} />,
      },
      {
        text: 'Core Web Vitals Optimization for Mobile Devices',
        icon: <FaCheckCircle className={iconStyle} />,
      },
      {
        text: 'API & Backend Integration (Laravel, Node.js, Firebase)',
        icon: <FaSyncAlt className={iconStyle} />,
      },
      {
        text: 'Post Launch Support & App Store Publishing',
        icon: <FaWrench className={iconStyle} />,
      },
    ],
  },
  {
    title: 'Cross Platform App Development Services We Offer',
    img: '/icons/card3.png',
    points: [
      {
        text: 'Custom Hybrid App Development Tailored to Your Business',
        icon: <FaTools className={iconStyle} />,
      },
      {
        text: 'Progressive Web App (PWA) Development',
        icon: <FaCloud className={iconStyle} />,
      },
      {
        text: 'Migration to Hybrid Architecture',
        icon: <FaSyncAlt className={iconStyle} />,
      },
      {
        text: 'Enterprise Mobility Apps',
        icon: <FaMobileAlt className={iconStyle} />,
      },
      {
        text: 'App Testing & QA for Android/iOS',
        icon: <FaBug className={iconStyle} />,
      },
      {
        text: 'App Store Optimization (ASO)',
        icon: <FaCheckCircle className={iconStyle} />,
      },
    ],
  },
];

export default function CardsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12 flex flex-col items-center">
        <h1 className={`text-3xl sm:text-3xl lg:text-4xl ${tiltNeon.className}`}>
          Hybrid App Development Services
        </h1>
        <p className="text-base text-gray-600 mt-4 max-w-xl text-center">
          Everything you need to build powerful, cross-platform mobile apps
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 justify-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg min-h-[500px] max-w-sm w-full space-y-4 shadow-lg p-10 text-center border mx-auto transition-all 
            duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:bg-gray-50"
          >
            <h3 className="text-lg font-bold mb-4">{card.title}</h3>
            <div className="flex justify-center mb-4 p-3">
              <Image
                src={card.img}
                alt="icon"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>
            <ul className="text-left text-md space-y-4">
              {card.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 leading-snug">
                  <span>{point.icon}</span>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
