import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { CheckCircle, Palette, Shield, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    'Durable, smooth finish',
    'Eco-friendly process',
    'Resistant to chipping & scratching',
    'UV & fade resistant',
    'Corrosion protection',
    'Available in 100+ colors',
    'Cost-effective',
    'Long-lasting performance'
];

const applications = [
    {
        title: 'Architectural Elements',
        description: 'Window frames, door frames, curtain walls, and building facades',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'
    },
    {
        title: 'Metal Furniture',
        description: 'Office furniture, outdoor furniture, and commercial fixtures',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80'
    },
    {
        title: 'Industrial Equipment',
        description: 'Machinery parts, equipment housing, and protective covers',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80'
    }
];

export default function SolutionPowderCoating() {
    return (
        <>
            <PageHeader
                tag="Powder Coating Solutions"
                title="Premium Powder-Coated Metal & Aluminium"
                subtitle="Durable, eco-friendly finishes in hundreds of colors for superior corrosion resistance and lasting beauty."
                backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            />

            {/* Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Superior Protection & Aesthetics
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Our advanced powder coating process delivers a finish that's not only beautiful
                                but also incredibly durable. The electrostatic application ensures even coverage
                                and superior adhesion, creating a protective barrier that withstands the test of time.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                With over 100 color options and various textures available, we can match any
                                architectural vision while providing unmatched protection against corrosion,
                                UV damage, and environmental wear.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Palette, label: '100+ Colors' },
                                    { icon: Shield, label: 'Corrosion Resistant' },
                                    { icon: Leaf, label: 'Eco-Friendly' },
                                    { icon: CheckCircle, label: 'Long-Lasting' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <span className="font-medium text-slate-700">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                                alt="Powder coating process"
                                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Key Benefits
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Why powder coating is the superior choice for metal finishing
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <CheckCircle className="w-6 h-6 text-cyan-500 mb-3" />
                                <p className="text-slate-700 font-medium">{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Applications
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Versatile solutions for diverse industries and applications
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {applications.map((app, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative overflow-hidden rounded-xl"
                            >
                                <div className="aspect-[4/3] relative">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                                        <p className="text-slate-300 text-sm">{app.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}