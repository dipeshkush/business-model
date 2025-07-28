'use client';
import { PhoneCall } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="w-full py-12 px-4 bg-white text-center">
            <div className="max-w-2xl mx-auto">
                {/* Heading */}
                <h2 className="text-lg font-bold text-gray-900">
                    Launch Your App with <span className="text-black">WebSeeder Today</span>
                </h2>

                {/* Subheading */}
                <p className="text-base text-gray-700 mt-4">
                    Ready to build a high performance app that works <br className="hidden sm:block" />
                    across platforms without breaking the bank?
                </p>

                {/* Let's Connect */}
                <h3 className="text-2xl sm:text-2xl font-bold text-[#6155D3] mt-8 flex items-center justify-center gap-2">
                    <span role="img" aria-label="rocket">🚀</span> <span className='underline'>Let’s Connect</span>
                </h3>

                {/* Support Text */}
                <p className="text-base text-gray-800 mt-4">
                    Have questions or ready to get started? <br />
                    Our experts will reach out shortly
                </p>

                {/* Button */}
                <div className="mt-6 flex justify-center">
                    <button className="flex items-center justify-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-indigo-600 transition-all duration-300">
                        <PhoneCall size={20} />
                        Request a Callback
                    </button>
                </div>

            </div>
        </section>
    );
}
