'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BsGraphUp, BsWallet2, BsClockHistory, BsFileEarmarkText } from 'react-icons/bs';

const features = [
    {
        title: 'Trustless Transactions',
        desc: 'Remove intermediaries & reduce fraud',
        icon: <BsGraphUp className="text-blue-500 text-xl" />,
    },
    {
        title: 'Faster Settlements',
        desc: 'Real-time asset transfers and micro-payments',
        icon: <BsWallet2 className="text-blue-500 text-xl" />,
    },
    {
        title: 'Global & Interoperable',
        desc: 'Connect to multiple chains & wallets',
        icon: <BsClockHistory className="text-blue-500 text-xl" />,
    },
    {
        title: 'Immutable Records',
        desc: 'Ideal for audits, legal, and compliance',
        icon: <BsFileEarmarkText className="text-blue-500 text-xl" />,
    },
];

export default function BlockchainBenefits() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-20 px-4 text-center bg-white">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold mb-12"
            >
                Why Blockchain? Why Now?
            </motion.h2>

            <div className="grid grid-cols-1 space-y-2 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        className="flex items-start gap-4 bg-[#F6F6F6B2] p-6 rounded-xl shadow-lg text-left hover:bg-gray-100 hover:shadow-2xl will-change-transform origin-center"
                    >
                        <div className="flex-shrink-0">{feature.icon}</div>
                        <div>
                            <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
