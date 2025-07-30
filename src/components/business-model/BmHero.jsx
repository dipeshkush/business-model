"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BmHero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

 
  const words = ["Flexible.", "Transparent.", "Scalable."];
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[loopIndex % words.length];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setLoopIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopIndex]);

  // GSAP animations on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(paraRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.9,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-blue-50  py-16"
    >
      {/* Background Floating Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-16 w-36 h-36 bg-blue-300/20 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-400/30 rounded-full blur-xl animate-float-slower" />
        <div className="absolute bottom-16 left-1/3 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl animate-float-slowest" />
        <div className="absolute bottom-24 right-1/4 w-28 h-28 bg-blue-100/40 rounded-full blur-xl animate-float-slow delay-700" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          ref={headingRef}
          className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight text-center"
        >
          Business Engagement Models at{" "}
          <span className="text-[#5A59A9]">WebSeeder</span>
          <span className="block mt-2 h-8">
            <span className="inline-block text-[#5A59A9] font-medium border-r-2 border-[#5A59A9] pr-1 animate-typing">
              {displayedText}
            </span>
          </span>
        </h1>

        <p
          ref={paraRef}
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
        >
          At WebSeeder, we believe that successful digital products are built on clarity — not just in code, but in collaboration.
          That’s why we offer three flexible business models tailored to suit startups, agencies, and enterprises alike. Whether you
          need a quick MVP, a full-fledged web app, or ongoing tech support, we have a scalable structure that adapts to your needs and your budget.
        </p>
      </div>
    </section>
  );
}
