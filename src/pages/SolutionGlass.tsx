import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Shield, Volume2, Sun, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Shield,
        title: 'Safety Lamination',
        description: 'Multi-layer laminated glass that holds together when shattered, preventing dangerous shards and providing impact resistance.'
    },
    {
        icon: Sun,
        title: 'UV Protection',
        description: 'Advanced UV filtering technology protects interiors from harmful sun rays while maintaining natural light transmission.'
    },
    {
        icon: Volume2,
        title: 'Sound Insulation',
        description: 'Superior acoustic performance reduces external noise pollution for peaceful, comfortable indoor environments.'
    },
    {
        icon: Lock,
        title: 'High Security',
        description: 'Bulletproof and blast-resistant glass options for banks, embassies, VIP residences, and high-security facilities.'
    }
];

const glassTypes = [
    {
        title: 'Standard Laminated Glass',
        features: ['Safety interlayer', 'UV protection', 'Clear or tinted options'],
        use: 'Residential & commercial windows, doors, partitions'
    },
    {
        title: 'Acoustic Laminated Glass',
        features: ['Enhanced sound dampening', 'Multiple interlayers', 'Up to 50% noise reduction'],
        use: 'Office buildings, hotels, urban residential'
    },
    {
        title: 'Security Laminated Glass',
        features: ['Multi-layer construction', 'Forced entry resistance', 'Impact protection'],
        use: 'Storefronts, jewelry stores, high-value facilities'
    },
    {
        title: 'Bulletproof Glass',
        features: ['Multiple glass layers', 'Polycarbonate interlayers', 'Certified protection levels'],
        use: 'Banks, embassies, government buildings, VIP residences'
    }
];

export default function SolutionGlass() {
    return (
        <>
            <PageHeader
                tag="Glass Solutions"
                title="Laminated & Safety Glass Systems"
                subtitle="Premium glass solutions combining safety, security, and performance for residential, commercial, and high-security applications."
                backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            />

            {/* Features */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Advanced Glass Technology
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Our laminated glass solutions provide superior safety, security, and performance
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 p-8 rounded-xl"
                            >
                                <div className="w-14 h-14 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Glass Types */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Glass Product Range
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Tailored solutions for every security and performance requirement
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {glassTypes.map((type, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.title}</h3>
                                <div className="space-y-2 mb-6">
                                    {type.features.map((feature, j) => (
                                        <div key={j} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                            <span className="text-slate-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-slate-200">
                                    <p className="text-sm text-slate-500 font-medium">Ideal for:</p>
                                    <p className="text-slate-700 mt-1">{type.use}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual showcase */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                                alt="Glass installation"
                                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                                alt="Modern glass facade"
                                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}