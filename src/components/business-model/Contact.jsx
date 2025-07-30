"use client";

import { PhoneCall, Mail, MessageCircleMore, Info, BadgeIndianRupee } from "lucide-react";
import { tiltNeon } from "@/app/layout";

export default function StillUnsureSection() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT: Message + CTA */}
                <div>
                    <h2 className={`text-3xl sm:text-3xl font-bold text-gray-900 mb-4 ${tiltNeon.className}`}>
                        Still Unsure Which Model Works for You?
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                        We understand that not all projects fit into predefined models. That’s why our solution consultants are here to help you choose the perfect approach based on your <span className="font-medium text-blue-700">goals</span>, <span className="text-indigo-700 font-medium">technology</span>, and 
                        <span className="text-pink-700 font-medium"> timeline</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <a
                            href="tel:+911234567890"
                            className="flex items-center gap-2 px-5 py-3 bg-blue-100 text-blue-900 rounded-xl shadow hover:bg-blue-50 transition"
                        >
                            <PhoneCall size={18} /> Call Us
                        </a>
                        <a
                            href="#livechat"
                            className="flex items-center gap-2 px-5 py-3 bg-indigo-100 text-indigo-900 rounded-xl shadow hover:bg-indigo-50 transition"
                        >
                            <MessageCircleMore size={18} /> Live Chat
                        </a>
                        <a
                            href="mailto:hello@webseeder.in"
                            className="flex items-center gap-2 px-5 py-3 bg-pink-100 text-pink-900 rounded-xl shadow hover:bg-pink-50 transition"
                        >
                            <Mail size={18} /> hello@webseeder.in
                        </a>
                    </div>
                </div>

                {/* RIGHT: Support Card */}
                <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-8 sm:p-10 relative">
                    <div className="absolute -top-6 left-6 bg-blue-600 p-3 rounded-full shadow">
                        <Info size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2 mt-4 flex items-center gap-2">
                        <BadgeIndianRupee className="w-6 h-6 text-blue-600" />
                        Best Pricing Models in India
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        For shorter-term projects, hourly hiring offers flexibility. But most Indian agencies — including <strong className="text-blue-600">WebSeeder</strong> — recommend:
                    </p>
                    <ul className="list-disc pl-5 my-4 text-gray-700 space-y-2">
                        <li>
                            <strong>Fixed Cost Model</strong> — Ideal for clearly defined scope.
                        </li>
                        <li>
                            <strong>Dedicated Team Model</strong> — Best for ongoing or scaling projects.
                        </li>
                    </ul>
                    <p className="text-gray-700">
                        ✅ Ensure <strong>sprint-level planning</strong> and <strong>clear documentation</strong> for successful delivery and transparency.
                    </p>
                </div>
            </div>
        </section>
    );
}
