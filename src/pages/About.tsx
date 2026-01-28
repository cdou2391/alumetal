import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Target, Eye, Award, Users, Leaf, Zap, Shield, Clock, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
    {
        icon: Award,
        title: 'Excellence',
        description: 'We pursue the highest standards in every product and service we deliver.'
    },
    {
        icon: Zap,
        title: 'Innovation',
        description: 'Constantly evolving with cutting-edge technology and creative solutions.'
    },
    {
        icon: Target,
        title: 'Integrity',
        description: 'Honesty and transparency in all our business relationships.'
    },
    {
        icon: Users,
        title: 'Customer Focus',
        description: 'Your needs drive our innovation and service excellence.'
    },
    {
        icon: Leaf,
        title: 'Sustainability',
        description: 'Environmentally responsible practices and eco-friendly solutions.'
    },
    {
        icon: Zap,
        title: 'Efficiency',
        description: 'Optimized processes delivering superior results on time, every time.'
    }
];

export default function About() {
    return (
        <>
            <PageHeader
                tag="About AluMetal Ltd"
                title="20+ Years of Manufacturing Excellence"
                subtitle="Building Rwanda's future with premium metal, aluminium, and glass solutions that stand the test of time."
                backgroundImage="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80"
            />

            {/* Company Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-4">
                                Who We Are
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                East Africa's Premier Metal & Glass Partner
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                                alt="Modern manufacturing facility"
                                className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-white p-6 rounded-lg shadow-xl">
                                <div className="text-cyan-100 text-sm">Years of Service</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-xl shadow-lg"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To be the leading provider of innovative and sustainable metal, aluminium,
                                and glass solutions in Rwanda and East Africa.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-10 rounded-xl shadow-lg"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Deliver superior metal and glass products that combine functionality, durability,
                                and aesthetic appeal while maintaining the highest standards of quality, safety,
                                and environmental responsibility.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
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
                            Our Core Values
                            <span className="w-8 h-px bg-cyan-400" />
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            What Drives Us Forward
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Our values are the foundation of everything we do, guiding our decisions
                            and shaping our culture.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/20 transition-all duration-300">
                                    <value.icon className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{value.title}</h3>
                                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitment */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0891b2 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Commitment</h2>
                        <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            At AluMetal, we pledge to uphold the highest standards in every project.
                            Your success is our reputation.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        {[
                            {
                                icon: Shield,
                                title: "Uncompromising Safety",
                                desc: "Rigorous safety protocols and premium materials ensure the wellbeing of our people and protection of your assets."
                            },
                            {
                                icon: Clock,
                                title: "On-Time Delivery",
                                desc: "We respect your timelines. Our optimized production workflows ensure we deliver when we say we will."
                            },
                            {
                                icon: Handshake,
                                title: "Enduring Partnerships",
                                desc: "We build more than structures; we build relationships based on trust, transparency, and mutual success."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-slate-100"
                            >
                                <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-8 h-8 text-cyan-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}