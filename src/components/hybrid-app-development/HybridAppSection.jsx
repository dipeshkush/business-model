'use client';
import Image from 'next/image';

export default function HybridAppSection() {
    return (
        <section className="w-full px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto relative">
                {/* Headings */}
                <h1 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
                    Top <span className="text-[#6155D3] font-bold">Hybrid App Development</span><br />
                    Company In Indore
                </h1>
                <p className="text-[#000004] mt-2">Build Once. Run Anywhere.</p>

                {/* Main Image with Positioned Icons */}
                <div className="relative mt-14 flex justify-center items-center">
                    {/* Center Image */}
                    <div className="bg-[#C7DEA4] rounded-xl shadow-lg p-4 sm:p-6 max-w-[300px] w-full mx-auto">
                        <Image
                            src="/icons/Image1.png"
                            alt="Hybrid App"
                            width={300}
                            height={300}
                            className="rounded-xl w-full h-auto z-10"
                        />
                    </div>

                    {/* Top-left Icon (hidden on small screens) */}
                    <Image
                        src="/icons/Image2.png"
                        alt="Top Left Icon"
                        width={100}
                        height={50}
                        className="hidden md:block absolute top-4 left-[260px] -translate-x-full -translate-y-1/2 z-20"
                    />

                    {/* Top-right Icon (hidden on small screens) */}
                    <Image
                        src="/icons/Image3.png"
                        alt="Top Right Icon"
                        width={100}
                        height={60}
                        className="hidden md:block absolute top-1 right-[290px] translate-x-full -translate-y-1/2 z-20"
                    />

                    {/* Bottom-right Icon (hidden on small screens) */}
                    <Image
                        src="/icons/image4.png"
                        alt="Bottom Right Icon"
                        width={100}
                        height={50}
                        className="hidden md:block absolute bottom-2 -right-[-245px] z-20"
                    />
                </div>

                {/* Description */}
                <p className="mt-10 text-gray-800 max-w-2xl mx-auto text-[16px] leading-relaxed text-left md:text-center px-2">
                    We build seamless, scalable cross platform mobile apps using Flutter, React Native and Ionic – delivering native like performance across Android & iOS.
                </p>

                {/* CTA */}
                <div className="mt-6 text-left md:text-center px-2">
                    <a href="#contact" className="text-[#6155D3] font-semibold hover:underline">
                        Get Free Quote
                    </a>
                </div>
            </div>
        </section>
    );
}
