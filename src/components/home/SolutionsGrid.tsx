import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Layers, Shield, Building2, PanelTop, Combine } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton';

const solutions = [
    {
        icon: Layers,
        title: 'Powder-Coated Metal & Aluminium',
        description: 'Durable, smooth, eco-friendly finishes resistant to chipping, scratching, fading, and corrosion. Available in hundreds of colors.',
        features: ['Eco-friendly process', 'Corrosion resistant', '100+ color options'],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        link: 'SolutionPowderCoating'
    },
    {
        icon: Shield,
        title: 'Laminated & Safety Glass',
        description: 'Premium laminated glass for windows and doors with UV protection, sound insulation, and bulletproof options for high-security environments.',
        features: ['UV protection', 'Sound insulation', 'Bulletproof options'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
        link: 'SolutionGlass'
    },
    {
        icon: Building2,
        title: 'Metal Furniture & Structures',
        description: 'Custom fabricated kiosks, table stands, bus shelters, balustrades, and glass canopies for commercial and public spaces.',
        features: ['Custom designs', 'Durable construction', 'Modern aesthetics'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
        link: 'SolutionStructures'
    },
    {
        icon: PanelTop,
        title: 'Windows, Doors & Curtain Walls',
        description: 'Custom aluminium window and door systems with double glazing and argon gas for superior energy efficiency.',
        features: ['Double glazing', 'Energy efficient', 'Custom sizing'],
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
        link: 'SolutionWindows'
    },
    {
        icon: Combine,
        title: 'Hybrid Steel & Aluminium Systems',
        description: 'Innovative systems combining steel backbone strength with aluminium durability. Slim profiles with large glass areas and enhanced thermal performance.',
        features: ['50+ year lifespan', 'Slim profiles', 'Superior insulation'],
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80',
        link: 'Innovation'
    }
];

export default function SolutionsGrid() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 text-cyan-600 text-sm font-medium tracking-wider uppercase mb-4">
                        <span className="w-8 h-px bg-cyan-600" />
                        Our Solutions
                        <span className="w-8 h-px bg-cyan-600" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Comprehensive Metal & Glass Solutions
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        From powder coating to architectural glass systems, we deliver end-to-end
                        solutions for every construction need.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={createPageUrl(solution.link)} className="group block h-full">
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden">
                                        <ImageWithSkeleton
                                            src={solution.image}
                                            alt={solution.title}
                                            className="group-hover:scale-110 transition-transform duration-700"
                                            containerClassName="w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center">
                                                <solution.icon className="w-6 h-6 text-slate-900" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                                            {solution.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                                            {solution.description}
                                        </p>

                                        <div className="space-y-2 mb-4">
                                            {solution.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm">
                                                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                                    <span className="text-slate-500">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center text-cyan-600 font-medium text-sm group-hover:gap-3 transition-all">
                                            Learn More
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}