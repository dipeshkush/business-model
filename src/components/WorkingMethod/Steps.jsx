"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tilt_Neon } from "next/font/google";

const tilt_neon = Tilt_Neon({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-tilt-neon",
    display: "swap",
});

const stepsData = [
    {
        step: "01",
        title: "Discovery & Consultation",
        description:
            "Every successful digital product begins with deep understanding – not just of the ‘what,’ but the ‘why.’ We start with a 1-on-1 discovery session to immerse ourselves in your business, your goals, your challenges, and your audience. Whether you’re a funded startup or an established enterprise, we align your vision with a scalable digital roadmap.",
        list: [
            "What You Get:",
            "Project brief with scope & goals",
            "Tech + stack recommendations",
            "Budget + timeline estimate",
            "Suggested engagement model (Fixed, Dedicated, or Hourly)"
        ],
        image: "../step1.png",
    },
    {
        step: "02",
        title: "Planning & Wireframing",
        description:
            "Next, we turn ideas into architecture. Our UI/UX experts and business analysts map out user journeys, sitemaps, and screen flows. Using Figma, Whimsical, and process modeling tools, we translate business logic into clickable prototypes and visual wireframes. This is where vision meets usability.",
        list: [
            "What You Get:",
            "Sitemap + Information architecture",
            "Wireframes for key screens",
            "UX flowcharts + workflow logic",
            "Timeline with sprint breakdown",
        ],
        image: "../step2.png",
    },
    {
        step: "03",
        title: "UI/UX Design",
        description:
            "Here’s where creativity meets conversion. Our design team breathes life into your brand by creating responsive, accessible and performance driven user interfaces. We obsess over every pixel, color, font and interaction - ensuring not just beauty, but clarity and usability across devices.",
        list: ["What You Get:",
            "Full UI design screens(mobile + desktop)",
            "Brand - aligned palettes, fonts & components",
            "Design system + reusable components",
            "Accessibility(WCAG 2.1) compliant layouts",
        ],
        image: "../uiux.png",
    },
    {
        step: "04",
        title: "Development & Integration",
        description:
            "Now, it’s time to build. Our development team begins implementing your frontend and backend using modern, scalable frameworks like React, Next.js, Laravel, Flutter, Node.js, WordPress, Firebase, MongoDB, AWS. Whether it’s a custom web app, CMS-powered site or hybrid mobile solution, we ensure clean code, API integration and performance optimization from day one.",
        list: ["What You Get:",
            "Live dev link + staging environment",
            "Agile sprint based progress updates",
            "Integrated backend with frontend UI",
            "Code hosted on GitHub / Bitbucket with version control",
        ],
        image: "../development.png",
    },
    {
        step: "05",
        title: "Testing & Optimization",
        description:
            "Before we go live, we test everything and we mean everything. From cross browser compatibility and mobile responsiveness to Core Web Vitals, Lighthouse scores and API validations, your product is audited inside out. We fix bugs, compress assets and ensure SEO readiness at launch with BrowserStack, PageSpeed Insights, GTmetrix and Screaming Frog.",
        list: ["What You Get:",
            "QA reports(manual + automated testing)",
            "Speed optimization(under 2s load goal)",
            "Core Web Vitals pass",
            "Bug logs + resolved changelog",
        ],
        image: "../testing.png",
    },
    {
        step: "06",
        title: "Launch & Post Launch Support",
        description:
            "We deploy with precision - on your domain, server or cloud environment. But our job doesn’t end with launch. Over the next 30 to 90 days, we provide continuous support: monitoring uptime, updating content, patching security and improving performance based on user behavior analytics.",
        list: ["What You Get:",
            "Final build + deployment on your stack(shared / VPS / cloud)",
            "Access credentials, documentation, admin training",
            "30 to 90 day support window(extendable)",
            "Optional: SEO, analytics, conversion optimization packages",
        ],
        image: "../launching.png",
    },
];

const StepItem = ({ step, isEven }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
            }}
            className={`flex flex-col-reverse md:flex-row ${isEven ? "md:flex-row-reverse" : ""
                } items-center gap-12`}
        >
            <div className="hidden md:block md:w-1/2">
                <div className="relative">
                    <img src={step.image} alt={step.title} className="w-full max-w-md mx-auto" />
                    <span className="absolute -top-6 -left-6 md:-top-8 md:-left-8 text-6xl md:text-7xl font-bold text-blue-300">
                        {step.step}
                    </span>
                </div>
            </div>

            <div className="relative md:w-1/2 w-full p-8 rounded-lg shadow-md bg-white overflow-hidden flex flex-col justify-between min-h-[480px] md:min-h-0">
                <div
                    className="md:hidden absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${step.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        filter: "blur(8px)",
                        opacity: 0.3,
                    }}
                ></div>


                <span className="block md:hidden absolute top-4 right-4 text-4xl font-bold text-blue-300 z-10">
                    {step.step}
                </span>

                <div className="relative z-10 p-4 rounded-lg">
                    <h2 className={`text-2xl md:text-3xl font-black text-blue-900 mb-2 ${tilt_neon.className}`}>{step.title}</h2>
                    <p className="text-gray-800 mb-4">{step.description}</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {step.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

// Main Component
export default function Steps() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <section className="py-16 scroll-smooth">
            <motion.h1
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`text-2xl md:text-4xl font-black text-blue-900 mt-4 text-center ${tilt_neon.className}`}
            >
                Our 6 Step Agile Workflow
            </motion.h1>

            <div className="max-w-7xl mx-auto px-4 space-y-24 mt-20">
                {stepsData.map((step, index) => (
                    <StepItem key={index} step={step} isEven={index % 2 !== 0} />
                ))}
            </div>
        </section>
    );
}
