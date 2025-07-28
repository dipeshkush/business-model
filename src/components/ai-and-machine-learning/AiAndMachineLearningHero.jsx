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
        <section ref={sectionRef} className="w-full px-4 py-10 text-center">
            <div className="max-w-4xl mx-auto relative">
                {/* Headings */}
                <h1 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
                    <span className="text-[#6155D3] font-bold">AI & Machine Learning </span>
                    Solutions<br /> Company in Indore
                </h1>
                <p className="text-[#000004] mt-2">At WebSeeder, we engineer AI and Machine Learning solutions
                    that help businesses automate decisions, predict outcomes, and unlock efficiency.</p>

                {/* Main Image with Positioned Icons */}
                <div className="relative mt-14 flex justify-center items-center">
                    {/* Center Image */}
                    <div
                        ref={imageRef}
                        className="bg-[#EDC133] rounded-xl shadow-lg p-3 sm:p-4 max-w-[300px] w-full mx-auto"
                    >
                        <Image
                            src="/icons/ai.png"
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
                        height={60}
                        className="hidden md:block absolute bottom-2 -right-[-245px] z-20"
                    />
                </div>

                {/* Description */}
                <p className="mt-10 text-gray-900 font-semibold max-w-2xl mx-auto text-[16px] leading-relaxed text-left md:text-center px-2">
                    From AI chatbots and recommendation engines to predictive analytics and computer vision apps, we design intelligent systems that learn, adapt, and scale with your business.
                    Whether you're an enterprise optimizing operations or a startup disrupting an industry, our Indore-based AI team brings deep expertise in Python, TensorFlow, GPT APIs, NLP, and computer vision - delivering outcomes, not just algorithms.
                </p>

            </div>
        </section>
    );
}
