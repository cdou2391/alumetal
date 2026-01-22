import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Frame, Wind, Thermometer, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Frame,
        title: 'Custom Aluminium Systems',
        description: 'Precision-engineered aluminium window and door frames designed to your exact specifications with superior finishing.'
    },
    {
        icon: Thermometer,
        title: 'Double Glazing with Argon',
        description: 'Energy-efficient double-glazed units filled with argon gas for superior thermal insulation and reduced energy costs.'
    },
    {
        icon: Wind,
        title: 'Weather Resistance',
        description: 'Advanced sealing systems protect against wind, rain, and dust while maintaining excellent ventilation.'
    },
    {
        icon: Maximize2,
        title: 'Curtain Wall Systems',
        description: 'Modern curtain wall solutions for commercial buildings, offering seamless glass facades with structural integrity.'
    }
];

const products = [
    {
        title: 'Sliding Windows',
        features: ['Space-saving design', 'Smooth operation', 'Large glass areas'],
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'
    },
    {
        title: 'Casement Windows',
        features: ['Maximum ventilation', 'Easy cleaning', 'Secure locking'],
        image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80'
    },
    {
        title: 'Aluminium Doors',
        features: ['Durable construction', 'Modern aesthetics', 'Security options'],
        image: 'https://images.unsplash.com/photo-1540459158584-1f1c1b1c7b4a?w=600&q=80'
    },
    {
        title: 'Curtain Walls',
        features: ['Full-height glazing', 'Structural support', 'Modern appearance'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
    }
];

export default function SolutionWindows() {
    return (
        <>
            <PageHeader
                tag="Windows & Doors"
                title="Premium Aluminium Windows, Doors & Curtain Walls"
                subtitle="Energy-efficient, custom-designed aluminium systems for residential and commercial applications."
                backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
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
                            Advanced Window & Door Systems
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Combining energy efficiency, security, and modern design
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

            {/* Products */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Our Product Range
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{product.title}</h3>
                                    <div className="space-y-2">
                                        {product.features.map((feature, j) => (
                                            <div key={j} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                                <span className="text-sm text-slate-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Energy efficiency */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                                alt="Energy efficient windows"
                                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Energy Efficiency That Saves
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Our double-glazed windows with argon gas filling provide exceptional thermal
                                insulation, reducing heat transfer and lowering your energy costs year-round.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Up to 50% reduction in heat transfer',
                                    'Lower air conditioning costs',
                                    'Improved indoor comfort',
                                    'Reduced outside noise',
                                    'UV protection for interiors',
                                    'Condensation resistance'
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}