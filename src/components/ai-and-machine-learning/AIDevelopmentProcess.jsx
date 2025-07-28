'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaRobot,
  FaDatabase,
  FaProjectDiagram,
  FaChartLine,
  FaServer,
  FaLaptopCode,
} from 'react-icons/fa';

const processSteps = [
  {
    title: 'AI Discovery Workshop',
    subtitle: 'Identify automation opportunities',
    icon: <FaRobot size={36} />,
  },
  {
    title: 'Data Collection & Cleaning',
    subtitle: 'Structured/unstructured datasets',
    icon: <FaDatabase size={36} />,
  },
  {
    title: 'Model Design & Prototyping',
    subtitle: 'Choose algorithms, create baseline',
    icon: <FaProjectDiagram size={36} />,
  },
  {
    title: 'Training, Tuning & Evaluation',
    subtitle: 'Cross-validation, accuracy testing',
    icon: <FaChartLine size={36} />,
  },
  {
    title: 'Deployment & Integration',
    subtitle: 'Flask, APIs, server/cloud integration',
    icon: <FaServer size={36} />,
  },
  {
    title: 'Monitoring & Retraining',
    subtitle: 'Drift detection, model refresh, version control',
    icon: <FaLaptopCode size={36} />,
  },
];

export default function AIDevelopmentProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 px-4 bg-gray-50 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        Our Proven AI/ML <br /> Development Process
      </motion.h2>

      {/* Divider */}
      <motion.hr
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="border-t border-gray-300 w-24 mx-auto my-6 origin-center"
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto mt-10">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-2xl bg-white transition-shadow duration-300 group cursor-default"
          >
            <div className="text-black group-hover:scale-110 transition-transform duration-300 mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
