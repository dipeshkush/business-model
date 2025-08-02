"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  FaBuilding, FaShoppingCart, FaGraduationCap, FaUserMd, FaTruck, FaIndustry,
  FaMoneyBillWave, FaUsers, FaSchool, FaProjectDiagram, FaCubes, FaFileAlt,
  FaBullhorn, FaChartLine, FaBalanceScale
} from "react-icons/fa";
import { tiltNeon } from '@/app/layout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Industries = [
  {
    title: "Real Estate CRM Automation",
    description: "Lead tracking, automated follow ups, payment milestone alerts and WhatsApp integrated sales pipelines.",
    icon: <FaBuilding />,
  },
  {
    title: "Retail Stock & Invoicing Software",
    description: "POS ready inventory system with real time syncing to delivery apps, auto invoice generation and GST-ready reports.",
    icon: <FaShoppingCart />,
  },
  {
    title: "EdTech Learning Portals",
    description: "Role based dashboards for students, faculty and admins with auto test evaluation, progress reports and e-certificate generation.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Healthcare Workflow Tool",
    description: "Automated flow from patient registration → lab orders → report uploads → email/SMS notifications. HIPAA aligned tracking.",
    icon: <FaUserMd />,
  },
  {
    title: "Logistics & Warehouse Management",
    description: "Auto dispatch logic, real time inventory tracking, vehicle routing, delivery reconciliation and API sync with courier partners.",
    icon: <FaTruck />,
  },
  {
    title: "Manufacturing Process Automation",
    description: "Raw material tracking → production batch flow → quality control logs → invoice + shipping stage automation.",
    icon: <FaIndustry />,
  },
  {
    title: "Finance & Invoicing Suite",
    description: "Expense tracking, invoice auto-fill, tax breakup and MIS dashboard for CFO-ready insights.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "HR & Payroll Automation",
    description: "Auto attendance sync, leave management, salary slips, tax calculations and CTC audit logs.",
    icon: <FaUsers />,
  },
  {
    title: "School/Institute Admin Software",
    description: "Admissions → fee management → timetable generation → marksheet compilation.",
    icon: <FaSchool />,
  },
  {
    title: "Franchise Management Platform",
    description: "Multi-branch control for inventory, sales and discounts with HO visibility.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Custom ERP for Small Business",
    description: "ERP with inventory, billing, employee tracking, vendor orders and analytics.",
    icon: <FaCubes />,
  },
  {
    title: "Document Workflow Automation",
    description: "Auto upload → approval hierarchy → version control → e-sign + cloud integration.",
    icon: <FaFileAlt />,
  },
  {
    title: "Marketing Campaign Tracker",
    description: "Multi-channel manager with budget, response tracking & ROI analytics.",
    icon: <FaBullhorn />,
  },
  {
    title: "Sales Pipeline Automation",
    description: "Auto lead distribution, deal stage tracking and performance leaderboards.",
    icon: <FaChartLine />,
  },
  {
    title: "Legal Firm Workflow System",
    description: "Case intake → document upload → appointment → milestone billing → client updates.",
    icon: <FaBalanceScale />,
  },
];

export default function UseCase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 3;
  const paginatedItems = Industries.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(Industries.length / ITEMS_PER_PAGE);

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const industryChunks = chunkArray(Industries, 6);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className={`text-[clamp(1.8rem,4vw,2.5rem)] text-center mb-4 font-extrabold text-gray-800 ${tiltNeon.className}`}>
          Industry Use Cases
        </h2>
        <p className="text-[clamp(0.95rem,1.5vw,1.125rem)] text-center text-gray-600 max-w-3xl mx-auto">
          Real-world solutions tailored to diverse industries and business needs.
        </p>

        {/* MOBILE VIEW */}
        {isMobile ? (
          <>
            <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2">
              {paginatedItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white shadow-md rounded-2xl p-6 text-center border border-gray-100"
                >
                  <div className="mb-5 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 shadow-sm">
                      <div className="text-white text-[28px]">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 flex justify-center items-center gap-4">
              <button onClick={() => setPage((p) => Math.max(p - 1, 0))} disabled={page === 0} className="px-4 py-2 bg-gray-200 rounded">
                Prev
              </button>
              <span>Page {page + 1} of {totalPages}</span>
              <button onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))} disabled={page === totalPages - 1} className="px-4 py-2 bg-gray-200 rounded">
                Next
              </button>
            </div>
          </>
        ) : (
          // DESKTOP CAROUSEL
          <div className="mt-10">
            <Slider {...sliderSettings}>
              {industryChunks.map((group, i) => (
                <div key={i} className="px-3">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                    {group.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover="hover"
                        initial="initial"
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="mb-10 bg-white shadow-md rounded-2xl p-6 sm:p-8 text-center border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="mb-5 flex items-center justify-center">
                          <motion.div
                            variants={{
                              hover: { scale: 1.2, rotate: 15 },
                              initial: { scale: 1, rotate: 0 },
                            }}
                            className="w-[clamp(3.5rem,5vw,4.5rem)] h-[clamp(3.5rem,5vw,4.5rem)] flex items-center justify-center rounded-full bg-[#5c66ab] shadow-sm"
                          >
                            <div className="text-white text-[32px]">
                              {item.icon}
                            </div>
                          </motion.div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
}
