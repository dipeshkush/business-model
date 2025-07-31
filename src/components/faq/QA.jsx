'use client';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { tiltNeon } from '@/app/layout';

const faqData = [
    {
        question: "What services does WebSeeder offer as a full stack website development company in Indore?",
        answer: "WebSeeder specializes in custom website development, hybrid app development, eCommerce solutions, WordPress development and performance optimization. We also handle UI/UX design, SEO integration and post launch support, making us a full-stack digital partner for businesses looking to scale online.",
    },
    {
        question: "Is WebSeeder suitable for startups or just large scale businesses?",
        answer: "We work with startups, SMEs and enterprise clients alike. Whether you need a one page MVP or a fully custom enterprise portal, WebSeeder tailors the tech stack, timelines and costs to your business goals. Our modular approach ensures scalability as you grow.",
    },
    {
        question: "How long does it take to build a website with WebSeeder?",
        answer: "A basic responsive website takes 2 to 3 weeks, while dynamic or eCommerce sites can take 4 to 6 weeks, depending on scope. We follow an agile sprint based process that includes discovery, design, development, testing and optimization ensuring on-time delivery.",
    },
    {
        question: "What technologies does WebSeeder use for web and app development?",
        answer: "We use a modern tech stack including React.js, Next.js, Laravel, Node.js, WordPress, Flutter and Firebase. This allows us to build fast, secure and scalable web and mobile applications that meet performance standards like Core Web Vitals.",
    },
    {
        question: "Will my website be SEO friendly and optimized for Google rankings?",
        answer: "Yes. Every website we build includes on-page SEO best practices, schema markup, mobile first design and Core Web Vitals optimization. We structure websites to not only rank but also perform well in voice search and AI snippets.",
    },
    {
        question: "Can WebSeeder help redesign and optimize my old website?",
        answer: "Absolutely. Our website revamp service includes UI/UX rework, speed optimization, SEO fixes and modern tech upgrades. We help businesses turn outdated, slow loading websites into high performing, conversion driven digital assets.",
    },
    {
        question: "Why should I choose WebSeeder over freelance developers or DIY platforms?",
        answer: "With WebSeeder, you get a professional team, not just a freelancer. That includes project managers, certified developers, UI/UX designers, QA experts and marketers working in sync. We offer accountability, security, scalability and long term support - things DIY tools and freelancers usually can’t guarantee.",
    },
    {
        question: "Does WebSeeder only work with clients in Indore or across India and globally?",
        answer: "While we're proudly headquartered in Indore, WebSeeder serves clients across India, the UAE, Singapore, and the US. Our agile processes, time zone overlap, and cloud-based collaboration tools let us build high performance websites and apps for global businesses with local efficiency.",
    },
    {
        question: "Can I hire WebSeeder just for frontend or backend development separately?",
        answer: "Yes. We offer modular hiring. You can choose to hire us for just UI/UX and frontend (HTML, CSS, React, Tailwind), or for backend development (Laravel, Node.js, Firebase). Many clients opt for our API first backend or Jamstack builds too.",
    },
    {
        question: "Will my website be mobile responsive and optimized for all screen sizes?",
        answer: "Absolutely. Every site we build at WebSeeder is 100% responsive, tested on 20+ devices and browsers. From mobile first CSS to responsive breakpoints and optimized media loading, we ensure seamless performance across smartphones, tablets, laptops and desktops.",
    },
    {
        question: "What security practices does WebSeeder follow for websites and apps?",
        answer: "We follow OWASP Top 10 security guidelines, SSL encryption, secure database handling, and sanitized input validation. On request, we also implement role based admin control, 2FA, and data backup automation to protect your digital assets.",
    },
    {
        question: "What’s the difference between hybrid app and native app development?",
        answer: "Hybrid apps (built using Flutter, React Native) use one codebase for Android & iOS, reducing cost and launch time. Native apps (built using Swift/Kotlin) offer slightly better performance but require separate development. WebSeeder recommends hybrid for 80% of use cases due to speed, cost efficiency and ease of scaling.",
    },
    {
        question: "Can WebSeeder help improve my existing website’s performance and SEO?",
        answer: "Yes. We offer Website Revamp Packages that include performance audits, UI rework, code refactoring, SEO fixes and Core Web Vitals optimization. Whether your site is slow, outdated, or not ranking - we can fix it without rebuilding from scratch.",
    },
    {
        question: "How does WebSeeder handle project communication and reporting?",
        answer: "We assign a dedicated project manager for every client. Weekly reports, sprint updates, and collaborative tools like Slack, ClickUp, Google Meet, Notion and Figma are used to maintain full transparency and daily sync.",
    },
    {
        question: "Can I get a custom CMS instead of WordPress or Shopify?",
        answer: "Yes. We build custom content management systems using Laravel, Node.js, or Strapi if you want full control over content structure, roles, and dynamic modules without relying on third-party platforms.",
    },
    {
        question: "Does WebSeeder provide long term website or app maintenance?",
        answer: "Yes. We offer monthly and quarterly maintenance packages that include updates, backups, SEO audits, speed tuning, content additions and bug fixes. Think of us as your outsourced tech team without the hiring hassle.",
    },
];

export default function QASection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-full mx-auto px-4 py-16 bg-white">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl text-center ${tiltNeon.variable} font-tilt-neon mb-20`}>
                Frequently Asked Questions
            </h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.15 }}
            >
                {faqData.map((item, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-gray-800 text-white' : 'bg-white text-black'
                                }`}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-start justify-between px-6 py-5 text-left font-medium focus:outline-none"
                            >
                                <span className="text-base sm:text-lg pr-4 text-left">{item.question}</span>

                                <motion.span
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="min-w-[36px] min-h-[36px] ml-4 flex items-center justify-center rounded-full border border-gray-900 bg-white"
                                >
                                    {isOpen ? (
                                        <FaMinus className="text-gray-900 text-sm" />
                                    ) : (
                                        <FaPlus className="text-gray-900 text-sm" />
                                    )}
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="px-6 pb-5 text-md leading-relaxed"
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </motion.div>

        </section>
    );
}