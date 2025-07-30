'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { AiOutlinePhone } from 'react-icons/ai';

export default function AiAndMachineLearningHero() {
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from(
        [icon1Ref.current, icon2Ref.current, icon3Ref.current].filter(Boolean),
        {
          opacity: 0,
          scale: 0.8,
          stagger: 0.2,
          duration: 0.8,
          delay: 0.4,
          ease: 'back.out(1.7)',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 text-white"
    >
      {/* Background for desktop */}
      <div className="absolute inset-0 -z-20 hidden md:block">
        <Image
          src="/bcd.webp"
          alt="Blockchain Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background gradient for mobile */}
      <div className="absolute inset-0 -z-20 block md:hidden bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-center md:text-left"
          >
            <span className="block whitespace-nowrap">
              Top <span className="text-[#A3A0F4]">BlockChain Development</span>
            </span>
            <span className="block mt-2">Company In Indore</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-gray-200">
            WebSeeder offers end-to-end blockchain development services to help
            startups, fintechs, and enterprises build decentralized, secure, and
            future-ready applications.
          </p>

          <p className="mt-8 text-gray-300 text-[16px] leading-relaxed max-w-xl">
            Whether you need a custom smart contract, crypto wallet,
            tokenization platform, or an entire blockchain-based SaaS, our team
            delivers robust, scalable solutions using Ethereum, Polygon, Solana,
            and Hyperledger.
            <br />
            <br />
            With deep experience in Web3, Solidity, Rust, Node.js, and secure
            audit practices – WebSeeder helps you transform bold ideas into
            real-world blockchain applications.
          </p>

          <div className="mt-8" ref={buttonRef}>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5A59A9] text-white rounded-md shadow-md hover:bg-[#7473B7] transition duration-300 font-semibold"
            >
              <AiOutlinePhone size={18} />
              Book Free Blockchain Consultation
            </button>
          </div>
        </div>

        {/* Optional Right Block */}
        <div className="w-full md:w-1/2 hidden md:block" ref={imageRef} />
      </div>
    </section>
  );
}
