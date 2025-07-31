'use client';
import { useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
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
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/HAD.webp"
          alt="Background"
          fill
          className="object-cover w-full h-full opacity-60"
        />
      </div>

      {/* Content and Image Side by Side on Desktop */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
        {/* Text Section */}
        <div className="flex-1">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug break-words"
          >
            <span className="block text-white">
              Top <span className="text-[#A3A0F4]">Hybrid App Development</span>
            </span>
            <span className="block mt-2 text-white">Company In Indore</span>
          </h1>

          <p
            ref={subheadingRef}
            className="text-white mt-2 text-base sm:text-lg font-medium"
          >
            Build Once. Run Anywhere.
          </p>

          <p
            ref={paragraphRef}
            className="mt-6 text-gray-200 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto lg:mx-0"
          >
            As a leading hybrid app development company in Indore, WebSeeder helps businesses build powerful, cross platform mobile applications that work seamlessly across Android and iOS - all from a single codebase. We specialize in Flutter app development, React Native solutions and Ionic framework builds, combining native like performance with faster time to market.
            <br /><br />
            Whether you're a startup launching your MVP or an enterprise optimizing mobile reach, our hybrid apps are designed for speed, responsiveness, scalability and lower development cost - without compromising on performance or UX. Get a free consultation to explore how our cross platform app development services in India can accelerate your mobile strategy.
          </p>

          <div ref={buttonRef} className="mt-8 flex justify-center lg:justify-start">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5A59A9] text-white rounded-md shadow-md hover:bg-[#7473B7] transition duration-300 font-semibold"
            >
              Get Free Quote
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className="flex-1 relative w-full max-w-[400px] aspect-square bg-white/10 p-4 sm:p-6 rounded-full shadow-xl flex items-center justify-center border border-white/20"
        >
          <Image
            src="/icons/had.svg"
            alt="Hybrid App"
            fill
            className="rounded-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
