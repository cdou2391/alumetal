import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Target, Eye, Award, Users, Leaf, Zap } from 'lucide-react';
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
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Rwanda's Premier Metal & Glass Manufacturer
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    AluMetal Ltd is a premier manufacturer and fabricator of high-quality metal,
                                    aluminium, and glass products based in Kigali, Rwanda. Built on over two decades
                                    of industry experience, we bring world-class craftsmanship and innovative
                                    solutions to the Rwandan market and beyond.
                                </p>
                                <p>
                                    Our commitment to excellence, combined with state-of-the-art production
                                    facilities, enables us to deliver products that meet international safety
                                    standards while catering to the unique requirements of each project.
                                </p>
                                <p>
                                    From residential homes to commercial towers, industrial facilities to
                                    government buildings, we've been the trusted partner for Rwanda's most
                                    ambitious construction projects.
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
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                                alt="Modern manufacturing facility"
                                className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-white p-6 rounded-lg shadow-xl">
                                <div className="text-4xl font-bold mb-1">20+</div>
                                <div className="text-cyan-100 text-sm">Years Serving Rwanda</div>
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
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 text-cyan-600 text-sm font-medium tracking-wider uppercase mb-4">
                            <span className="w-8 h-px bg-cyan-600" />
                            Our Core Values
                            <span className="w-8 h-px bg-cyan-600" />
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            What Drives Us Forward
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                                className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                                    <value.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '20+', label: 'Years Experience' },
                            { value: '500+', label: 'Projects Completed' },
                            { value: '100+', label: 'Color Options' },
                            { value: '50+', label: 'Year Product Lifespan' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}