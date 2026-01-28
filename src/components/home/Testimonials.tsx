import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

import LogoCarousel from './LogoCarousel';

const testimonials = [
    {
        name: "Jean Claude N.",
        role: "Project Manager",
        company: "Kigali Heights",
        content: "AluMetal delivered our glass facade on time and the quality is exceptional. Their attention to detail is unmatched in Rwanda.",
        rating: 5
    },
    {
        name: "Sarah M.",
        role: "Homeowner",
        company: "Vision City",
        content: "We love our new noise-reducing windows. The installation team was professional, clean, and fast. Highly recommended!",
        rating: 5
    },
    {
        name: "David K.",
        role: "Architect",
        company: "BuildRight Ltd",
        content: "As an architect, I appreciate their ability to execute complex custom designs. Their powder coating shop is the best in town.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 text-cyan-600 text-sm font-medium tracking-wider uppercase mb-4">
                        <span className="w-8 h-px bg-cyan-600" />
                        Trusted Partners
                        <span className="w-8 h-px bg-cyan-600" />
                    </span>

                    <div className="w-full mb-12">
                        <LogoCarousel />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        What Our Clients Say
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <Quote className="w-10 h-10 text-cyan-200 mb-4" />
                            <p className="text-slate-700 leading-relaxed mb-6 italic">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <div className="font-bold text-slate-900">{testimonial.name}</div>
                                <div className="text-cyan-600 text-sm font-medium">{testimonial.role}</div>
                                <div className="text-slate-400 text-xs">{testimonial.company}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
