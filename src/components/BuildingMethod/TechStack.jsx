"use client";

import Image from "next/image";
import React, { useState } from "react";
import { tiltNeon } from '@/app/layout';

const techData = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "/assets/tech/html.png" },
      { name: "CSS", icon: "/assets/tech/css.png" },
      { name: "JavaScript", icon: "/assets/tech/javascript.png" },
      { name: "TypeScript", icon: "/assets/tech/typescript.png" },
      { name: "React.js", icon: "/assets/tech/reactjs.png" },
      { name: "Tailwind", icon: "/assets/tech/tailwind.png" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "/assets/tech/nodejs.png" },
      { name: "Python", icon: "/assets/tech/backend/python-icon-1.svg" },
      { name: "GraphQL", icon: "/assets/tech/backend/graphql.svg" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: "/assets/tech/mongodb.png" },
      { name: "MySQL", icon: "/assets/tech/database/mysql-icon-1.svg" },
      { name: "Firebase", icon: "/assets/tech/database/firebase-icon-1.svg" },
      { name: "AWS DynamoDB", icon: "/assets/tech/database/aws-dynamodb-1.svg" },
      { name: "Redis", icon: "/assets/tech/database/redis-icon-1.svg" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: "/assets/tech/docker.png" },
      { name: "Hostinger", icon: "/assets/logos/hostinger.png" },
      { name: "Github Actions", icon: "/assets/tech/devops/githubAction.png" },
      { name: "Netlify", icon: "/assets/tech/devops/netlify.png" },
    ],
  },
  {
    category: "Automation & AI",
    items: [
      { name: "ChatGPT", icon: "/assets/tech/automation-ai/chatGPT.png" },
      { name: "Python", icon: "/assets/tech/automation-ai/python.png" },
      { name: "Zapier", icon: "/assets/tech/automation-ai/zapier-icon.svg" },
      { name: "Make.com", icon: "/assets/tech/automation-ai/make.png" },
    ],
  },
];


const TechStack = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const currentCategory = techData.find((section) => section.category === activeTab);

  return (
    <section className="relative bg-blue-50 py-24 px-6 md:px-20 lg:px-32 overflow-hidden">
      <h2 className={`text-3xl md:text-4xl text-center mb-5 font-extrabold text-gray-800 ${tiltNeon.className}`}>
        Tech Stack That Powers Your Software
      </h2>

      <div className="border-b border-b-blue-400 px-6 py-4 mb-12 flex flex-wrap justify-center gap-6">

        {techData.map((section) => (
          <button
            key={section.category}
            onClick={() => setActiveTab(section.category)}
            className={`cursor-pointer relative text-lg font-medium text-blue-700 transition-all duration-300 hover:text-blue-700
              ${activeTab === section.category ? "text-blue-700" : ""}
            `}
          >
            <span className="relative group">
              {section.category}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-700 transition-all duration-300
                  ${activeTab === section.category ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </span>
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {currentCategory.items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center gap-3 bg-gray-50 shadow px-5 py-3 rounded-xl"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-base font-medium text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TechStack;