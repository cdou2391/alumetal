import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Combine, Zap, TrendingUp, Shield, DollarSign, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const advantages = [
    {
        icon: Shield,
        title: 'Superior Strength',
        description: 'Steel backbone provides structural integrity and load-bearing capacity that exceeds pure aluminium systems.'
    },
    {
        icon: Zap,
        title: 'Enhanced Durability',
        description: 'Aluminium components resist corrosion while maintaining aesthetic appeal for decades of maintenance-free performance.'
    },
    {
        icon: TrendingUp,
        title: 'Slim Profiles',
        description: 'Optimized engineering allows for slimmer frames and larger glass areas, maximizing natural light and views.'
    },
    {
        icon: Clock,
        title: '50+ Year Lifespan',
        description: 'Engineered for longevity with proper installation and minimal maintenance requirements.'
    },
    {
        icon: Combine,
        title: 'Better Insulation',
        description: 'Thermal break technology provides superior insulation compared to traditional aluminium systems.'
    },
    {
        icon: DollarSign,
        title: 'Cost-Effective Premium',
        description: 'Premium performance at a more accessible price point than comparable high-end systems.'
    }
];

export default function Innovation() {
    return (
        <>
            <PageHeader
                tag="Innovation"
                title="Hybrid Steel & Aluminium Systems"
                subtitle="The future of architectural metal systems - combining steel strength with aluminium aesthetics for unparalleled performance."
                backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-4">
                                Next-Generation Technology
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                The Best of Both Worlds
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Our innovative hybrid systems combine the structural strength of steel with
                                the durability and aesthetics of aluminium, creating a superior solution for
                                modern architectural applications.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                By integrating a steel backbone with aluminium components, we achieve
                                exceptional performance characteristics that surpass traditional single-material
                                systems while maintaining cost-effectiveness.
                            </p>
                            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
                                <p className="text-cyan-900 font-medium">
                                    "Hybrid systems represent the future of high-performance architectural fenestration,
                                    offering unmatched strength-to-weight ratios and thermal efficiency."
                                </p>
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
                                alt="Hybrid system construction"
                                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-lg shadow-xl">
                                <div className="flex items-center gap-4">
                                    <Combine className="w-10 h-10 text-cyan-400" />
                                    <div>
                                        <div className="text-2xl font-bold">50+</div>
                                        <div className="text-slate-300 text-sm">Year Lifespan</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Advantages */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Key Advantages
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Why hybrid systems are the superior choice for demanding applications
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advantages.map((advantage, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                                    <advantage.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{advantage.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical specs */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Technical Excellence
                            </h2>
                            <div className="space-y-6">
                                <div className="border-l-4 border-cyan-500 pl-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Steel Core</h3>
                                    <p className="text-slate-600">
                                        High-strength steel reinforcement provides structural integrity and
                                        load-bearing capacity for large spans and tall installations.
                                    </p>
                                </div>
                                <div className="border-l-4 border-slate-400 pl-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Aluminium Exterior</h3>
                                    <p className="text-slate-600">
                                        Premium powder-coated aluminium components ensure corrosion resistance,
                                        low maintenance, and lasting aesthetic appeal.
                                    </p>
                                </div>
                                <div className="border-l-4 border-cyan-500 pl-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Thermal Break</h3>
                                    <p className="text-slate-600">
                                        Advanced thermal break technology minimizes heat transfer for superior
                                        energy efficiency and indoor comfort.
                                    </p>
                                </div>
                                <div className="border-l-4 border-slate-400 pl-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Slim Profiles</h3>
                                    <p className="text-slate-600">
                                        Optimized engineering enables slimmer sightlines and maximum glass area,
                                        creating modern, light-filled spaces.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                                alt="Hybrid system detail"
                                className="w-full h-[300px] object-cover rounded-xl shadow-xl"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                                alt="Modern architecture"
                                className="w-full h-[300px] object-cover rounded-xl shadow-xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ideal Applications
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Where hybrid systems deliver exceptional value
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            'High-rise buildings',
                            'Commercial facades',
                            'Luxury residences',
                            'Government buildings',
                            'Hotels & resorts',
                            'Industrial facilities',
                            'Educational institutions',
                            'Healthcare facilities'
                        ].map((app, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                                    <span className="text-white font-medium">{app}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}