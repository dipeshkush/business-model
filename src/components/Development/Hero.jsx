
'use client';
import { useEffect, useRef } from 'react';
import { SiMinutemailer } from 'react-icons/si';
import gsap from 'gsap';
import Image from 'next/image';

export default function HybridAppSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.from(headingRef.current, { opacity: 0, y: 40 })
        .from(subheadingRef.current, { opacity: 0, y: 30 }, '-=0.6')
        .from(paragraphRef.current, { opacity: 0, y: 30 }, '-=0.5')
        .from(buttonRef.current, { opacity: 0, scale: 0.95 }, '-=0.4');

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-black/80 overflow-hidden"
    >

      {/* Content and Image Side by Side on Desktop */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
        {/* Text Section */}
        <div className="flex-1">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug break-words"
          >
            <span className="block text-white">
              Top <span className="text-[#A3A0F4]">Website Development</span>
            </span>
            <span className="block mt-2 text-white">Company In Indore</span>
          </h1>

          <p
            ref={subheadingRef}
            className="text-white mt-2 text-base sm:text-lg font-medium"
          >
            SEO-Optimized, Blazing Fast Websites.
          </p>

          <p
            ref={paragraphRef}
            className="mt-6 text-gray-200 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto lg:mx-0"
          >
            Looking for a custom website development company in India that builds
            blazing fast, SEO-optimized and fully responsive websites tailored to
            your business goals? At WebSeeder, we specialize in full-stack website
            development, custom CMS solutions, and mobile-first UI/UX design that
            drives conversions and ranks on Google from day one.           <br />            <br />
            Whether you need a high-performance corporate website, an elegant
            eCommerce storefront, or a dynamic web portal, our Indore-based team
            uses React, WordPress, Laravel, and modern frontend frameworks to
            deliver secure, scalable, and Core Web Vitals–compliant websites that
            elevate your online presence.
          </p>

          {/* Updated Animated Button */}
          <div ref={buttonRef} className="mt-8 flex justify-center lg:justify-start">
            <a
              href="/contact-us"
              className="group inline-flex items-center justify-center bg-[#5c66ab] hover:bg-[#394173] text-white rounded px-5 py-3 text-sm sm:text-base font-semibold shadow-md gap-2 transition-all duration-300 transform"
            >
              Let’s Start Development
              <span className="relative w-[28px] h-[28px]">
                <SiMinutemailer
                  size={24}
                  className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                <span className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
              </span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className="flex-1 relative w-full max-w-[400px] aspect-square bg-white/10 p-4 sm:p-6 rounded-full shadow-xl flex items-center justify-center border border-white/20"
        >
          <Image
            src="/assets/Dev/hero.svg"
            alt="Hybrid App"
            fill
            className="rounded-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
