'use client';

import { useEffect, useRef } from 'react';
import {
  CheckCircle,
  PencilRuler,
  Code2,
  Settings,
  Bug,
  Send,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AgileProcessSection() {
  const sectionRef = useRef(null);

  const steps = [
    {
      title: 'Discovery & Strategy',
      description: 'Initial phase to define project goals and strategy',
      icon: <CheckCircle size={20} />,
      side: 'left',
      color: 'text-blue-600 bg-blue-100 border-blue-300',
    },
    {
      title: 'Wireframing & UI/UX Design',
      description: 'Creating visual layouts and user experience designs',
      icon: <PencilRuler size={20} />,
      side: 'right',
      color: 'text-sky-600 bg-sky-100 border-sky-300',
    },
    {
      title: 'Hybrid Framework Selection',
      description: 'Choosing the appropriate framework for development',
      icon: <Code2 size={20} />,
      side: 'left',
      color: 'text-green-600 bg-green-100 border-green-300',
    },
    {
      title: 'Development & API Integration',
      description: 'Building the app and integrating necessary APIs',
      icon: <Settings size={20} />,
      side: 'right',
      color: 'text-lime-600 bg-lime-100 border-lime-300',
    },
    {
      title: 'Testing & QA',
      description: 'Testing the app on devices and emulators',
      icon: <Bug size={20} />,
      side: 'left',
      color: 'text-yellow-600 bg-yellow-100 border-yellow-300',
    },
    {
      title: 'App Store Publishing + Support',
      description: 'Publishing the app and providing ongoing support',
      icon: <Send size={20} />,
      side: 'right',
      color: 'text-orange-600 bg-orange-100 border-orange-300',
    },
  ];

  useEffect(() => {
    const items = gsap.utils.toArray('.step-item');

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
        }
      );
    });
  }, []);

  return (
    <section
      className="py-16 px-4 md:px-10 lg:px-20 text-center"
      ref={sectionRef}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-16">
        Our Agile Development Process for Hybrid Apps
      </h2>

      <div className="max-w-2xl mx-auto flex flex-col space-y-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="step-item flex flex-col md:flex-row justify-between items-center w-full text-left opacity-0"
          >
            {/* === LEFT SIDE === */}
            {step.side === 'left' ? (
              <>
                {/* Desktop */}
                <div className="hidden md:flex w-full md:w-1/2 justify-end mr-2">
                  <div
                    className={`flex items-center gap-2 px-4 py-3 border font-semibold rounded-l-full rounded-r-md w-fit ${step.color}`}
                  >
                    {step.icon}
                    <span>{step.title}</span>
                  </div>
                </div>
                <div className="hidden md:flex w-full md:w-1/2 justify-end mt-2 md:mt-0">
                  <p className="text-gray-700">{step.description}</p>
                </div>

                {/* Mobile */}
                <div className="flex md:hidden flex-col w-full items-start text-left">
                  <div
                    className={`flex items-center gap-2 px-4 py-3 border font-semibold rounded-l-full rounded-r-md w-fit ${step.color}`}
                  >
                    {step.icon}
                    <span>{step.title}</span>
                  </div>
                  <p className="text-gray-700 mt-1">{step.description}</p>
                </div>
              </>
            ) : (
              <>
                {/* Desktop */}
                <div className="hidden md:flex w-full md:w-1/2 justify-end mt-2 md:mt-0 mr-2">
                  <p className="text-gray-700 text-right">{step.description}</p>
                </div>
                <div className="hidden md:flex w-full md:w-1/2 justify-start">
                  <div
                    className={`flex items-center gap-2 px-4 py-3 border font-semibold rounded-r-full w-fit ${step.color}`}
                  >
                    {step.icon}
                    <span>{step.title}</span>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex md:hidden flex-col w-full items-end text-right">
                  <div
                    className={`flex items-center gap-2 px-4 py-3 border font-semibold rounded-r-full w-fit ${step.color}`}
                  >
                    {step.icon}
                    <span>{step.title}</span>
                  </div>
                  <p className="text-gray-700 mt-1">{step.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
