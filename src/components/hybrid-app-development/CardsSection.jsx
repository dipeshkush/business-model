'use client';
import React from 'react';
import Image from 'next/image';
import { tiltNeon } from '@/app/layout';

const cardData = [
  {
    title: 'Why Hybrid Mobile Apps are the Future',
    img: '/icons/card1.png',
    points: [
      'Cost Efficient  One codebase for both iOS & Android',
      'Faster Time to Market  30 to 40% faster deployment',
      'Easy Maintenance  Single app = easier updates & lower costs',
    ],
  },
  {
    title: 'Why WebSeeder is Your Go To Hybrid App Development Partner in Indore',
    img: '/icons/card2.png',
    points: [
      'Full Stack Expertise (Flutter, React Native, Ionic)',
      'Pixel Perfect UI/UX optimized for all screens',
      'Offline Capability and PWA ready builds',
      'Core Web Vitals for Mobile',
      'API & Backend Integration (Laravel, Node.js, Firebase)',
      'Post Launch Support & App Store Publishing',
    ],
  },
  {
    title: 'Cross Platform App Development Services We Offer',
    img: '/icons/card3.png',
    points: [
      'Custom Hybrid App Development',
      'Progressive Web App (PWA) Development',
      'Migration to Hybrid Architecture',
      'Enterprise Mobility Apps',
      'App Testing & QA for Android/iOS',
      'App Store Optimization (ASO)',
    ],
  },
];

export default function CardsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12 flex flex-col items-center">
        <h1
          className={` text-3xl sm:text-3xl lg:text-4xl ${tiltNeon.className}`}
        >
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
            className="bg-white rounded-lg min-h-[500px] max-w-sm w-full space-y-4 shadow-lg p-10 text-center border mx-auto transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
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
                <li key={i} className="list-disc list-outside pl-4 leading-snug">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
