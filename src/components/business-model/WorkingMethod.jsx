"use client";

import React, { useEffect, useRef, useState } from "react";
import { Target, Users, Zap, CheckCircle } from "lucide-react";

function AgileCard({ icon, title, desc, cardRef, style, isMobile }) {
  return (
    <div
      ref={cardRef}
      style={style}
     className={`w-72 max-w-[90vw] p-6 bg-white rounded-2xl shadow-xl border border-blue-100 z-10 transition-all duration-700 ease-out
  ${isMobile ? "static my-3 opacity-100 transform-none" : "absolute opacity-0"}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 text-blue-600 rounded-full">{icon}</div>
        <h3 className="text-lg font-semibold text-pink-700">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function WorkingMethod() {
  const cardRefs = useRef([]);
  const centerRef = useRef(null);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  const cardPositions = [
    { top: "20px", left: "0px" },
    { top: "20px", right: "0px" },
    { bottom: "20px", left: "0px" },
    { bottom: "20px", right: "0px" },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCards();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, [isMobile]);

  const animateCards = () => {
    const center = centerRef.current;
    const centerRect = center.getBoundingClientRect();
    const parentRect = center.parentElement.getBoundingClientRect();

    const centerX = centerRect.left + centerRect.width / 2 - parentRect.left;
    const centerY = centerRect.top + centerRect.height / 2 - parentRect.top;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const final = cardPositions[i];
      card.style.left = `${centerX - 140}px`;
      card.style.top = `${centerY - 90}px`;

      setTimeout(() => {
        card.style.transition = "all 0.8s ease-out";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
        for (const side of ["top", "left", "right", "bottom"]) {
          if (final[side]) card.style[side] = final[side];
          else card.style[side] = "auto";
        }
      }, i * 200 + 200);
    });
  };

  const cardData = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Sprint Planning",
      desc: "Organized development cycles with clear goals and deliverables.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Cross-functional Teams",
      desc: "Collaborative approach with diverse team roles for innovation.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Rapid Iteration",
      desc: "Fast feedback and delivery loops for quick refinement.",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Quality Assurance",
      desc: "In-built QA checks throughout every development stage.",
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-white px-4 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-[#5A59A9] mb-4">
          Agile Development Process
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our agile methodology ensures rapid iteration, collaborative teamwork,
          and high-quality deliverables through structured planning and continuous feedback.
        </p>
      </div>

      <div className={`relative max-w-6xl mx-auto ${isMobile ? "flex flex-col items-center gap-6" : "min-h-[550px]"}`}>
        {/* Center Image */}
        {!isMobile && (
          <div
            ref={centerRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          >
            <div className="w-[580px] max-w-[90vw] h-[320px] rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
              <img
                src="/agile.webp"
                alt="Agile Process"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Cards */}
        {cardData.map((card, i) => (
          <AgileCard
            key={i}
            {...card}
            isMobile={isMobile}
            cardRef={(el) => (cardRefs.current[i] = el)}
            style={{}}
          />
        ))}
      </div>
    </section>
  );
}
