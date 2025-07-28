'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function HybridAppSection() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const icon1Ref = useRef(null);
    const icon2Ref = useRef(null);
    const icon3Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Main image animation
            gsap.from(imageRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out'
            });

            // Icons animation
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
        <section ref={sectionRef} className="w-full px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto relative">
                {/* Headings */}
                <h1 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
                    Top <span className="text-[#6155D3] font-bold">Hybrid App Development</span><br />
                    Company In Indore
                </h1>
                <p className="text-[#000004] mt-2">Build Once. Run Anywhere.</p>

                {/* Main Image with Positioned Icons */}
                <div className="relative mt-14 flex justify-center items-center">
                    {/* Center Image */}
                    <div
                        ref={imageRef}
                        className="bg-[#C7DEA4] rounded-xl shadow-lg p-4 sm:p-6 max-w-[300px] w-full mx-auto"
                    >
                        <Image
                            src="/icons/Image1.png"
                            alt="Hybrid App"
                            width={300}
                            height={300}
                            className="rounded-xl w-full h-auto z-10"
                        />
                    </div>

                    {/* Top-left Icon */}
                    <Image
                        ref={icon1Ref}
                        src="/icons/Image2.png"
                        alt="Top Left Icon"
                        width={100}
                        height={50}
                        className="hidden md:block absolute top-4 left-[260px] -translate-x-full -translate-y-1/2 z-20"
                    />

                    {/* Top-right Icon */}
                    <Image
                        ref={icon2Ref}
                        src="/icons/Image3.png"
                        alt="Top Right Icon"
                        width={100}
                        height={60}
                        className="hidden md:block absolute top-1 right-[290px] translate-x-full -translate-y-1/2 z-20"
                    />

                    {/* Bottom-right Icon */}
                    <Image
                        ref={icon3Ref}
                        src="/icons/image4.png"
                        alt="Bottom Right Icon"
                        width={100}
                        height={50}
                        className="hidden md:block absolute bottom-2 -right-[-245px] z-20"
                    />
                </div>

                {/* Description */}
                <p className="mt-10 text-gray-800 max-w-2xl mx-auto text-[16px] leading-relaxed text-left md:text-center px-2">
                    We build seamless, scalable cross platform mobile apps using Flutter, React Native and Ionic – delivering native like performance across Android & iOS.
                </p>

                {/* CTA */}
                <div className="mt-6 text-left md:text-center px-2">
                    <a href="#contact" className="text-[#6155D3] font-semibold hover:underline">
                        Get Free Quote
                    </a>
                </div>
            </div>
        </section>
    );
}
