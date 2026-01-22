import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageHeader from '@/components/shared/PageHeader';
import { Layers, Shield, Building2, PanelTop, Combine, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
    {
        icon: Layers,
        title: 'Powder-Coated Metal & Aluminium',
        description: 'Durable, smooth, eco-friendly finishes resistant to chipping, scratching, fading, and corrosion. Available in hundreds of colors for any architectural vision.',
        features: ['Eco-friendly electrostatic coating', 'Superior corrosion resistance', '100+ color options', 'UV & weather resistant'],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        link: 'SolutionPowderCoating'
    },
    {
        icon: Shield,
        title: 'Laminated & Safety Glass',
        description: 'Premium laminated glass solutions for windows and doors with UV protection, sound insulation, and bulletproof options for high-security environments.',
        features: ['UV protection', 'Enhanced sound insulation', 'Safety & security lamination', 'Bulletproof glass available'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        link: 'SolutionGlass'
    },
    {
        icon: Building2,
        title: 'Metal Furniture & Structures',
        description: 'Custom fabricated kiosks, table stands, bus shelters, balustrades, and glass canopies for commercial and public spaces.',
        features: ['Custom design & fabrication', 'Architectural balustrades', 'Public infrastructure', 'Commercial furniture'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        link: 'SolutionStructures'
    },
    {
        icon: PanelTop,
        title: 'Windows, Doors & Curtain Walls',
        description: 'Custom aluminium window and door systems with double glazing and argon gas for superior energy efficiency and modern aesthetics.',
        features: ['Double glazing with argon gas', 'Energy efficient design', 'Custom sizing available', 'Modern curtain wall systems'],
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        link: 'SolutionWindows'
    },
    {
        icon: Combine,
        title: 'Hybrid Steel & Aluminium Systems',
        description: 'Innovative systems combining steel backbone strength with aluminium durability. Slim profiles with large glass areas and enhanced thermal performance.',
        features: ['50+ year lifespan', 'Slim aesthetic profiles', 'Superior thermal insulation', 'Cost-effective premium alternative'],
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
        link: 'Innovation'
    }
];

export default function Solutions() {
    return (
        <>
            <PageHeader
                tag="Our Solutions"
                title="Comprehensive Metal & Glass Systems"
                subtitle="From powder coating to architectural glass systems, we deliver end-to-end solutions for every construction need."
                backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="space-y-16">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="relative">
                                        <img
                                            src={solution.image}
                                            alt={solution.title}
                                            className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
                                        />
                                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center">
                                            <solution.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-4">
                                        Solution #{index + 1}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                        {solution.title}
                                    </h2>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                        {solution.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {solution.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                                <span className="text-slate-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link to={createPageUrl(solution.link)}>
                                        <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors group">
                                            Learn More
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}