"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ConnectButton() {
        const router = useRouter();
    
        const handleClick = () => {
            router.push("/contact-us");
        };
    return (
        <div className="flex justify-center">
            <motion.button
                onClick={handleClick}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-full overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:px-3 hover:py-3 hover:rounded-full"
            >
                <span className="transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-0">
                    Book a free Consultation
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                    <Mail className="w-5 h-5" />
                </span>
            </motion.button>
        </div>
    );
}
