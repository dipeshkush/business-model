'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function FAQHeroSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });
      tl.from(headingRef.current, { opacity: 0, y: 40 })
        .from(paragraphRef.current, { opacity: 0, y: 30 }, '-=0.6');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 sm:px-16 md:px-24 lg:px-32 py-16 bg-gray-900 overflow-hidden"
    >
      {/* Left Text Content */}
      <div className="max-w-2xl w-full text-left z-10">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
        >
          Everything You Need <br className="block sm:hidden" />
          To Know About <span className="text-[#A3A0F4]">WebSeeder</span>
        </h1>
        <p
          ref={paragraphRef}
          className="text-gray-200 text-base sm:text-lg leading-relaxed"
        >
          Welcome to the FAQ section of Webseeder Technologies, your one-stop destination for all things tech, digital, and marketing innovation. Whether you're curious about our services, project approach, or support policies, we've compiled answers to the most common questions to help you understand how we work, what we offer, and why businesses trust us. Get insights into our process, expertise, and commitment to delivering impactful digital solutions.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full max-w-md mt-12 md:mt-0 flex justify-center md:justify-end">
        <Image
          src="/faq.svg"
          alt="FAQ Illustration"
          width={400}
          height={400}
          className="w-auto max-h-[400px] object-contain filter invert"
        />
      </div>
    </section>
  );
}
