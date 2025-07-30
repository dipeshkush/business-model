'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PhoneCallIcon } from 'lucide-react';
import Image from 'next/image';

export default function AIMLHero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.from(headingRef.current, { opacity: 0, y: 40 })
        .from(subHeadingRef.current, { opacity: 0, y: 30 }, '-=0.6')
        .from(paragraphRef.current, { opacity: 0, y: 30 }, '-=0.5')
        .from(buttonRef.current, { opacity: 0, scale: 0.95 }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="absolute inset-0 -z-10 block md:hidden bg-gradient-to-tr from-[#0B1721] to-[#1FA2A2]" />

      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src="/aiml.webp"
          alt="AI ML Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-16 mx-auto">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug"
          >
            <span className="text-[#00B4D8]">AI & Machine Learning</span>
            <br />
            Solutions Company in Indore
          </h1>

          <p
            ref={subHeadingRef}
            className="text-white mt-3 text-base sm:text-lg font-medium"
          >
            Automate. Predict. Scale with Intelligence.
          </p>

          <p
            ref={paragraphRef}
            className="mt-6 text-gray-200 text-sm sm:text-base leading-relaxed"
          >
            At WebSeeder, we engineer AI and Machine Learning solutions that help businesses automate decisions,
            predict outcomes, and unlock efficiency.
            <br /><br />
            From AI chatbots and recommendation engines to predictive analytics and computer vision apps,
            we design intelligent systems that learn, adapt, and scale with your business.
            Whether you're an enterprise optimizing operations or a startup disrupting an industry,
            our Indore-based AI team brings deep expertise in Python, TensorFlow, GPT APIs, NLP, and computer vision —
            delivering outcomes, not just algorithms.
          </p>

          <div className="mt-8" ref={buttonRef}>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00B4D8] text-white rounded-md shadow-md hover:bg-[#0D1C2A] transition duration-300 font-semibold"
            >
              Book a Free AI Demo
              <PhoneCallIcon size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Empty right block for layout */}
        <div className="w-full md:w-1/2 hidden md:block" />
      </div>
    </section>
  );
}
