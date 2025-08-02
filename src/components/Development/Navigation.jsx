"use client";

import { useEffect, useState } from "react";
import { Menu, X, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact Us", href: "#" },
];

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleClick = () => {
        router.push("/contact-us");
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // scroll down = hide
            } else {
                setShowNavbar(true); // scroll up = show
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center cursor-pointer space-x-2">
                    <img
                        src="/webseeder.webp"
                        alt="WebSeed Logo"
                        className="w-40 h-12 object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item.name} className="group relative">
                            <a
                                href={item.href}
                                onClick={() => setActive(item.name)}
                                className={`inline-block px-2 py-1 font-medium transition-colors duration-200 ${active === item.name
                                    ? "text-indigo-600"
                                    : "text-gray-600 hover:text-indigo-600"
                                    }`}
                            >
                                {item.name}
                            </a>
                            <span
                                className={`absolute left-0 bottom-0 h-[2px] bg-indigo-600 transition-all duration-300 ${active === item.name
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                                    }`}
                            />
                        </li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <motion.button
                    onClick={handleClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer group relative hidden md:flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-full overflow-hidden transition-all duration-500 hover:px-3 hover:py-3"
                >
                    <span className="transition-all duration-500 group-hover:opacity-0 group-hover:scale-0">
                        Discuss a Project
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                        <Send className="h-5 w-5" />
                    </span>
                </motion.button>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none text-gray-700"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col space-y-3 px-6 py-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={() => {
                                        setActive(item.name);
                                        setIsOpen(false);
                                    }}
                                    className={`block px-4 py-2 rounded-md font-medium transition-colors duration-200 ${active === item.name
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-700 hover:bg-indigo-100"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#"
                                onClick={() => setIsOpen(false)}
                                className="block text-center bg-indigo-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-indigo-700 transition"
                            >
                                Discuss A Project
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
