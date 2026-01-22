import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle, tag, backgroundImage }) {
    return (
        <section className="relative py-32 bg-slate-900 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={backgroundImage || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"}
                    alt="Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/80" />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="absolute bottom-20 right-10 w-48 h-px bg-gradient-to-l from-transparent via-slate-500/30 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    {tag && (
                        <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
                            <span className="w-8 h-px bg-cyan-400" />
                            {tag}
                        </span>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}