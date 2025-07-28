'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stack = [
    {
        title: 'Programming Language',
        items: 'Python, JavaScript (Node.js)',
        color: 'bg-yellow-500',
    },
    {
        title: 'Frameworks',
        items: 'TensorFlow, PyTorch, Keras, Scikit-Learn',
        color: 'bg-amber-600',
    },
    {
        title: 'NLP & Chat',
        items: 'spaCy, NLTK, GPT-4 APIs, LangChain',
        color: 'bg-rose-500',
    },
    {
        title: 'Vision',
        items: 'OpenCV, YOLOv8, Tesseract OCR',
        color: 'bg-pink-500',
    },
    {
        title: 'Data',
        items: 'Pandas, NumPy, Matplotlib, DVC',
        color: 'bg-purple-500',
    },
    {
        title: 'Deployment',
        items: 'Flask, FastAPI, AWS SageMaker, Docker',
        color: 'bg-indigo-500',
    },
];

export default function AIStack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-16 px-4 bg-white text-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold mb-10"
            >
                AI Is Only As Good As the Stack Behind It
            </motion.h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {stack.map((tech, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <div className="flex w-full max-w-md items-start">
                            {/* Left - Square Title Box */}
                            <div
                                className={`aspect-square w-28 sm:w-32 flex items-center justify-center text-white font-medium text-sm md:text-base rounded-2xl ${tech.color} shadow`}
                            >
                                {tech.title}
                            </div>

                            {/* Right - Shorter Rectangular Description Box */}
                            <div
                                className={`w-full ml-0.5 max-w-[calc(100%-8rem)] h-28 self-center flex items-center px-4 text-white text-sm md:text-base rounded-r-2xl rounded-tl-2xl rounded-bl-2xl ${tech.color} shadow`}
                            >
                                {tech.items}
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
