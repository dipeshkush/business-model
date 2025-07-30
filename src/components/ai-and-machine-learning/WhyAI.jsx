'use client';
import { motion } from 'framer-motion';
import { FaChartBar, FaRobot, FaDatabase, FaComments, FaEye, FaFileAlt } from 'react-icons/fa';
import { tiltNeon } from '@/app/layout';

// Feature data
const features = [
    { icon: <FaChartBar size={30} className="text-blue-500" />, title: 'Predict customer behavior', desc: 'Improve sales & retention' },
    { icon: <FaRobot size={30} className="text-blue-500" />, title: 'Automate decision-making', desc: 'Reduce human error' },
    { icon: <FaDatabase size={30} className="text-blue-500" />, title: 'Make sense of big data', desc: 'Faster insights' },
    { icon: <FaComments size={30} className="text-blue-500" />, title: 'Create 24/7 conversational support', desc: 'AI chatbots' },
    { icon: <FaEye size={30} className="text-blue-500" />, title: 'Add computer vision & OCR', desc: 'Visual recognition, ID scans' },
    { icon: <FaFileAlt size={30} className="text-blue-500" />, title: 'Auto-analyze documents', desc: 'Invoice parsing, contract mining' },
];

// Motion variants
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 12 } },
};

export default function WhyAI() {
    return (
        <section className="py-16 px-4 bg-white">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`text-3xl md:text-3xl lg:text-4xl mb-10 text-center ${tiltNeon.variable} font-tilt-neon`}
            >
                Why Your Business Needs AI –<br />Now More Than Ever
            </motion.h2>


            {/* Feature Cards */}
            <motion.div
                className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ scale: 1.03 }}
                        className="bg-[#D6F4F4] shadow-sm hover:shadow-[0_4px_20px_#D6F4F4] transition-all p-6 rounded-xl text-left flex items-start gap-4"
                    >
                        <div className="pt-1">{item.icon}</div>
                        <div>
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
