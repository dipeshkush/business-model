"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import {
    Briefcase,
    Clock,
    Settings,
    DollarSign,
    UserCheck,
    CalendarDays,
    Info,
    ArrowRightCircle,
} from "lucide-react";

export default function PricingModel() {
    const [activeModel, setActiveModel] = useState(null);
    const detailRef = useRef([]);

    const models = [
        {
            id: "fixed",
            title: "Fixed Cost",
            description:
                "Best suited for projects with well-defined requirements. Predictable budgeting with clear deliverables.",
            details: {
                "Best For": "Short, well-defined projects",
                Flexibility: "Low",
                "Developer Involvement": "On demand",
                "Cost Predictability": "High",
                "Suitable For": "Startups, SMEs",
                "Avg Pricing": "INR 25K - 1.2L",
            },
            icon: <DollarSign className="text-[#3E3D77]" size={24} />,
            bg: "bg-[#5A59A9]/10",
            textColor: "#3E3D77",
        },
        {
            id: "hourly",
            title: "Hourly Based",
            description:
                "Flexible engagement where you pay for the actual hours worked. Ideal for ongoing tasks or undefined scope.",
            details: {
                "Best For": "Minor tasks / urgent fixes",
                Flexibility: "High",
                "Developer Involvement": "On demand",
                "Cost Predictability": "Medium",
                "Suitable For": "Any business",
                "Avg Pricing": "INR 499 - 899/hour",
            },
            icon: <Clock className="text-[#B33659]" size={24} />,
            bg: "bg-[#D14C74]/10",
            textColor: "#B33659",
        },
        {
            id: "dedicated",
            title: "Dedicated Resource",
            description:
                "Hire a dedicated team working exclusively on your project. Best for long-term goals and scalability.",
            details: {
                "Best For": "Long-term & complex builds",
                Flexibility: "Very High",
                "Developer Involvement": "Full-time (exclusive)",
                "Cost Predictability": "Medium",
                "Suitable For": "Agencies, SaaS, Scale-ups",
                "Avg Pricing": "INR 55K - 1.5L/month",
            },
            icon: <Briefcase className="text-[#5A59A9]" size={24} />,
            bg: "bg-gradient-to-r from-[#5A59A9]/10 to-[#D14C74]/10",
            textColor: "#5A59A9",
        },
    ];


    const detailIcons = {
        "Best For": <Briefcase size={18} className="text-gray-500" />,
        Flexibility: <UserCheck size={18} className="text-gray-500" />,
        "Developer Involvement": <Info size={18} className="text-gray-500" />,
        "Cost Predictability": <Settings size={18} className="text-gray-500" />,
        "Suitable For": <UserCheck size={18} className="text-gray-500" />,
        "Avg Pricing": <DollarSign size={18} className="text-gray-500" />,
    };


    useEffect(() => {
        if (activeModel) {
            detailRef.current = [];
            requestAnimationFrame(() => {
                gsap.from(detailRef.current, {
                    y: -20,
                    opacity: 0,
                    stagger: 0.08,
                    duration: 0.4,
                    ease: "power2.out",
                });
            });
        }
    }, [activeModel]);

    useEffect(() => {
        setActiveModel(models[0]);
    }, []);

    return (
        <section className="w-full py-16 px-6 bg-white text-gray-800 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-3xl font-bold text-[#5A59A9] mb-4 tracking-tight">
                        Choose Your Perfect Pricing Model
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Flexible engagement options designed to match your project’s scale, goals, and complexity.
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left - Cards */}
                    <div className="space-y-8">
                        {models.map((model) => (
                            <div
                                key={model.id}
                                onMouseEnter={() => setActiveModel(model)}
                                className={`group relative flex items-start gap-5 ${model.bg} p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
                            >
                                <div className="p-3 rounded-full bg-white/80 shadow-sm">
                                    {model.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-1 transition-all duration-300 group-hover:translate-x-1 flex items-center gap-2" style={{ color: model.textColor }}>
                                        {model.title}
                                    </h3>
                                    <p className="text-gray-800 text-md">{model.description}</p>
                                </div>
                                <ArrowRightCircle
                                    size={24}
                                    className={`absolute right-6 top-6 text-gray-600 transition-transform duration-300
                                    ${activeModel?.id === model.id ? 'opacity-100 animate-pulse' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'}
                                     `}
                                />

                            </div>
                        ))}
                    </div>

                    {/* Right - Detail Panel */}
                    <div className="relative border border-gray-200 rounded-2xl overflow-hidden min-h-[400px] shadow-inner transition">
                        <div className="absolute inset-0">
                            <img
                                src="/PM.webp"
                                alt="Background"
                                className="w-full h-full object-cover filter blur-sm brightness-50"
                            />
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                        </div>

                        {/* Detail Content */}
                        <div className="relative z-10 p-6 h-full text-center" key={activeModel?.id}>
                            {activeModel ? (
                                <div>
                                    <h3 className="text-2xl font-bold mb-6 flex flex-col items-center justify-center gap-2">
                                        <div className="flex items-center gap-2 justify-center">
                                            <Info size={22} className="text-white" />
                                            <span className="text-white">{activeModel.title} Details</span>
                                        </div>
                                    </h3>

                                    <ul className="space-y-4 text-md text-left">
                                        {Object.entries(activeModel.details).map(([key, value], index) => (
                                            <li
                                                key={key}
                                                ref={(el) => (detailRef.current[index] = el)}
                                                className="flex justify-between items-center py-2 border-b border-dashed border-white/30"
                                            >
                                                <span className="flex items-center gap-2 font-medium text-white">
                                                    {(detailIcons[key] &&
                                                        React.cloneElement(detailIcons[key], {
                                                            className: "text-white",
                                                            size: 18,
                                                        })) || <Info size={16} className="text-white" />}
                                                    {key}
                                                </span>
                                                <span className="text-white text-right">{value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div className="text-white text-center mt-20">
                                    Hover over a model to view its detailed benefits.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
