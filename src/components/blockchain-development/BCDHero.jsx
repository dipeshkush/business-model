'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { SiMinutemailer } from 'react-icons/si';

export default function AiAndMachineLearningHero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.1,
        ease: 'power3.out',
      });

      gsap.from([para1Ref.current, para2Ref.current], {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.2,
        ease: 'power2.out',
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1,
        ease: 'back.out(1.7)',
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 text-white overflow-hidden"
    >
      {/* Desktop Background */}
      <div className="absolute inset-0 -z-20 hidden md:block">
        <Image
          src="/bcd.webp"
          alt="Blockchain Background"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Mobile Gradient Background */}
      <div className="absolute inset-0 -z-20 block md:hidden bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug break-words"
          >
            <span className="block">
              <span className="text-[#A3A0F4]">BlockChain Development</span>
            </span>
            <span className="block mt-2">Company In Indore</span>
          </h1>

          <p
            ref={para1Ref}
            className="mt-4 text-base sm:text-lg text-gray-200"
          >
            WebSeeder offers end-to-end blockchain development services to help
            startups, fintechs, and enterprises build decentralized, secure, and
            future-ready applications.
          </p>

          <p
            ref={para2Ref}
            className="mt-6 text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
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

          <div className="mt-8 flex justify-center md:justify-start" ref={buttonRef}>
            <a
              href="/contact-us"
              className="group inline-flex items-center justify-center bg-[#5058a0] hover:bg-[#394173] text-white rounded px-5 py-3 text-sm sm:text-base shadow-md gap-2 transition-all duration-300 transform"
            >
              Book Free Blockchain Consultation
              <span className="relative w-[28px] h-[28px]">
                <SiMinutemailer
                  size={24}
                  className="plane-icon transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                <span className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
              </span>
            </a>
          </div>
        </div>

        {/* Right side filler block (optional) */}
        <div
          ref={imageRef}
          className="w-full md:w-1/2 hidden md:block"
        >
          {/* Optional image or animation */}
        </div>
      </div>
    </section>
  );
}
