import React from 'react';
import { Clock, Award, Settings, Target, Factory, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
    {
        icon: Clock,
        title: '20+ Years of Expertise',
        description: 'Over two decades of experience delivering excellence in metal and glass fabrication across East Africa.'
    },
    {
        icon: Award,
        title: 'Exceptional Quality & Finishing',
        description: 'Superior powder coating, precision fabrication, and flawless finishing that exceeds industry standards.'
    },
    {
        icon: Settings,
        title: 'End-to-End Services',
        description: 'Complete solutions from design consultation through fabrication, installation, and after-sales support.'
    },
    {
        icon: Target,
        title: 'Versatility Across Sectors',
        description: 'Serving residential, commercial, industrial, and government projects with equal expertise.'
    },
    {
        icon: Factory,
        title: 'Modern Production Capacity',
        description: 'State-of-the-art facilities equipped with advanced machinery for high-volume precision manufacturing.'
    },
    {
        icon: Shield,
        title: 'International Standards',
        description: 'Products manufactured to meet international safety and quality certifications.'
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
                        <span className="w-8 h-px bg-cyan-400" />
                        Why Choose Us
                        <span className="w-8 h-px bg-cyan-400" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        The AluMetal Advantage
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        What sets us apart as Rwanda's trusted partner for metal and glass solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-8 h-full hover:bg-slate-800 hover:border-cyan-500/30 transition-all duration-300">
                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <reason.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}