import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    { src: '/logos/BK-ARENA-LOGOwhite-1-min.png', alt: 'BK Arena' },
    { src: '/logos/Bralirwa_Brewery_logo.png', alt: 'Bralirwa' },
    { src: '/logos/Kigali Marriott Logo.jpg', alt: 'Kigali Marriott' },
    { src: '/logos/radisson blu logo.png', alt: 'Radisson Blu' },
    { src: '/logos/skol_logo.jpg', alt: 'Skol' },
];

export default function LogoCarousel() {
    return (
        <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-10 mb-6 bg-white shadow-sm border-y border-slate-100">
            <motion.div
                className="flex gap-16 items-center"
                animate={{
                    x: ['0%', '-25%'],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 15,
                        ease: "linear",
                    },
                }}
                style={{ width: 'fit-content', display: 'flex' }}
            >
                {[...logos, ...logos, ...logos, ...logos].map((logo, index) => {
                    const isLarge = ['Bralirwa', 'Kigali Marriott', 'Radisson Blu'].includes(logo.alt);
                    return (
                        <div
                            key={index}
                            className={`
                                flex-shrink-0 flex items-center justify-center px-4
                                ${isLarge ? 'w-64 h-32' : 'w-48 h-24'}
                                ${logo.alt === 'BK Arena' ? 'bg-slate-900 rounded-xl mx-2' : ''}
                            `}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}
