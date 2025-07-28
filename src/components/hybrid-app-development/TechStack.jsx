'use client';
import Image from 'next/image';
import React from 'react';

const techStack = [
  { name: 'Flutter', src: '/techstack/flutter.png' },
  { name: 'Firebase', src: '/techstack/firebase.png' },
  { name: 'MySQL', src: '/techstack/mysql.png' },
  { name: 'Figma', src: '/techstack/figma.png' },
  { name: 'Ionic', src: '/techstack/ionic.png' },
  { name: 'React Native', src: '/techstack/react-native.png' },
  { name: 'Laravel', src: '/techstack/laravel.png' },
  { name: 'Node.js', src: '/techstack/node.png' },
];

export default function TechStack() {
  return (
    <section className="bg-[#f5f8fe] py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Modern Tech Stack,<br />
          Future Proof Apps
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="w-[60px] md:w-[100px] lg:w-[100px] h-auto transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={tech.src}
              alt={tech.name}
              width={100}
              height={100}
              className="mx-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
