import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
            {/* Background with overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
                    alt="Industrial metal fabrication"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />
            </div>

            {/* Geometric accent lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-0 w-96 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent" />
                <div className="absolute top-40 right-0 w-64 h-px bg-gradient-to-l from-transparent via-cyan-500/20 to-transparent" />
                <div className="absolute bottom-32 left-20 w-px h-40 bg-gradient-to-b from-transparent via-slate-500/30 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium tracking-wider uppercase mb-6">
                            <span className="w-8 h-px bg-cyan-400" />
                            Rwanda's Premier Metal & Glass Manufacturer
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                    >
                        Premium Metal, Aluminium & Glass Solutions for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-slate-300">
                            Rwanda's Growing Infrastructure
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
                    >
                        With over 20 years of expertise, AluMetal Ltd delivers world-class powder-coated
                        metal products, laminated glass, and architectural systems for residential,
                        commercial, industrial, and government projects.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link to={createPageUrl('Contact')}>
                            <Button
                                size="lg"
                                className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-8 py-6 text-base group"
                            >
                                Request a Quote
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link to={createPageUrl('Solutions')}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-slate-500 text-white hover:bg-slate-800 px-8 py-6 text-base"
                            >
                                Explore Our Solutions
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-700/50"
                >
                    {[
                        { value: '20+', label: 'Years Experience' },
                        { value: '500+', label: 'Projects Completed' },
                        { value: '100+', label: 'Color Options' },
                        { value: '50+', label: 'Year Lifespan' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-slate-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
            </motion.div>
        </section>
    );
}