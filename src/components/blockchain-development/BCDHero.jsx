'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function AiAndMachineLearningHero() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const icon1Ref = useRef(null);
    const icon2Ref = useRef(null);
    const icon3Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out'
            });

            gsap.from([icon1Ref.current, icon2Ref.current, icon3Ref.current], {
                opacity: 0,
                scale: 0.8,
                stagger: 0.2,
                duration: 0.8,
                delay: 0.4,
                ease: 'back.out(1.7)'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full px-4 py-10 text-center">
            <div className="max-w-4xl mx-auto relative">
                {/* Headings */}
                <h1 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
                    <span className="text-[#6155D3] font-bold">Blockchain Development</span>
                    <br /> Company in Indore
                </h1>
                <p className="text-[#000004] mt-2">
                    WebSeeder offers end-to-end blockchain development services to help startups,
                    fintechs, and enterprises build decentralized, secure, and future-ready applications.
                </p>

                {/* Main Image with Positioned Icons */}
                <div className="relative mt-14 flex justify-center items-center">

                    {/* Center Image */}
                    <div
                        ref={imageRef}
                        className="bg-[#ACDE9A] rounded-xl shadow-lg p-4 sm:p-6 md:p-8 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] mx-auto"
                    >
                        <Image
                            src="/icons/bcdicon1.png"
                            alt="Hybrid App"
                            width={300}
                            height={300}
                            className="rounded-xl w-full h-auto z-10"
                            priority
                        />
                    </div>

                    {/* Top-left Icon */}
                    <div
                        ref={icon1Ref}
                        className="hidden md:block absolute top-10 left-[260px] -translate-x-full -translate-y-1/2 z-20"

                    >
                        <Image
                            src="/icons/bcdicon2.png"
                            alt="Top Left Icon"
                            width={100}
                            height={50}
                        />
                    </div>

                    {/* Top-right Icon */}
                    <div
                        ref={icon2Ref}
                        className="hidden md:block absolute top-1 right-[260px] translate-x-full -translate-y-1/2 z-20"
                    >
                        <Image
                            src="/icons/bcdicon3.png"
                            alt="Top Right Icon"
                            width={30}
                            height={30}
                        />
                    </div>

                    {/* Bottom-right Icon */}
                    <div
                        ref={icon3Ref}
                        className="hidden md:block absolute bottom-2 -right-[-245px] z-20"
                    >
                        <Image
                            src="/icons/bcdicon4.png"
                            alt="Bottom Right Icon"
                            width={70}
                            height={60}
                        />
                    </div>
                </div>

                {/* Description */}
                <p className="mt-10 text-gray-900 font-semibold max-w-2xl mx-auto text-[16px] leading-relaxed text-left md:text-center px-2">
                    Whether you need a custom smart contract, crypto wallet, tokenization platform, or an entire blockchain-based SaaS, our team delivers robust, scalable solutions using Ethereum, Polygon, Solana, and Hyperledger.
                    With deep experience in Web3, Solidity, Rust, Node.js, and secure audit practices - WebSeeder helps you transform bold ideas into real-world blockchain applications.
                </p>
            </div>
        </section>
    );
}
