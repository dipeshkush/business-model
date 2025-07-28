'use client';
import { motion } from 'framer-motion';
import { FaChartBar, FaRobot, FaDatabase, FaComments, FaEye, FaFileAlt } from 'react-icons/fa';

const features = [
    {
        icon: <FaChartBar size={24} className="text-blue-500" />,
        title: 'Predict customer behavior',
        desc: 'Improve sales & retention',
    },
    {
        icon: <FaRobot size={24} className="text-blue-500" />,
        title: 'Automate decision-making',
        desc: 'Reduce human error',
    },
    {
        icon: <FaDatabase size={24} className="text-blue-500" />,
        title: 'Make sense of big data',
        desc: 'Faster insights',
    },
    {
        icon: <FaComments size={24} className="text-blue-500" />,
        title: 'Create 24/7 conversational support',
        desc: 'AI chatbots',
    },
    {
        icon: <FaEye size={24} className="text-blue-500" />,
        title: 'Add computer vision & OCR',
        desc: 'Visual recognition, ID scans',
    },
    {
        icon: <FaFileAlt size={24} className="text-blue-500" />,
        title: 'Auto-analyze documents',
        desc: 'Invoice parsing, contract mining',
    },
];

export default function WhyAI() {
    return (
        <section className="py-16 px-4 text-center bg-white">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold mb-10"
            >
                Why Your Business Needs AI –<br />Now More Than Ever
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, transition: { type: 'tween', duration: 0.3 } }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.1, duration: 1 }}
                        className="bg-gray-50 shadow-md hover:shadow-lg transform p-6 rounded-xl text-left flex items-start gap-4 hover:bg-gray-100"
                    >

                        <div className="pt-1">{item.icon}</div>
                        <div>
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
