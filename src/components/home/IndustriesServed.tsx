import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Home, Building, Factory, Landmark, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton';

const industries = [
    {
        icon: Home,
        title: 'Residential Construction',
        description: 'Premium windows, doors, and architectural elements for high-end homes and apartments.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80'
    },
    {
        icon: Building,
        title: 'Commercial Real Estate',
        description: 'Curtain walls, storefronts, and glass facades for offices, malls, and hotels.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
    },
    {
        icon: Factory,
        title: 'Industrial Facilities',
        description: 'Durable metal structures and safety solutions for manufacturing and warehousing.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80'
    },
    {
        icon: Landmark,
        title: 'Government & Public Projects',
        description: 'Large-scale infrastructure, public buildings, and civic architecture.',
        image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=600&q=80'
    },
    {
        icon: ShieldCheck,
        title: 'High-Security Installations',
        description: 'Bulletproof glass and reinforced systems for banks, embassies, and VIP residences.',
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80'
    }
];

export default function IndustriesServed() {
    return (
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
                        Industries We Serve
                        <span className="w-8 h-px bg-cyan-600" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Solutions for Every Sector
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        From residential homes to high-security government installations,
                        we deliver tailored solutions across all construction sectors.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-xl ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                                }`}
                        >
                            <div className="aspect-[4/3] relative">
                                <ImageWithSkeleton
                                    src={industry.image}
                                    alt={industry.title}
                                    className="group-hover:scale-110 transition-transform duration-700"
                                    containerClassName="w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <industry.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {industry.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {industry.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        to={createPageUrl('Industries')}
                        className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all"
                    >
                        View All Industries
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}