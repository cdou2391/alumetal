import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Home, Building, Factory, Landmark, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
    {
        icon: Home,
        title: 'Residential Construction',
        description: 'Premium windows, doors, and architectural elements for high-end homes, apartments, and residential complexes.',
        services: [
            'Custom aluminium windows & doors',
            'Glass balustrades & railings',
            'Powder-coated finishes',
            'Energy-efficient double glazing',
            'Security solutions',
            'Modern architectural detailing'
        ],
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
    },
    {
        icon: Building,
        title: 'Commercial Real Estate',
        description: 'Curtain walls, storefronts, and glass facades for offices, retail spaces, malls, and hotels.',
        services: [
            'Full-height curtain wall systems',
            'Commercial storefront systems',
            'Office partitioning solutions',
            'Branded entrance systems',
            'Large-scale glass installations',
            'Custom architectural metalwork'
        ],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
        icon: Factory,
        title: 'Industrial Facilities',
        description: 'Durable metal structures and safety solutions for manufacturing, warehousing, and industrial operations.',
        services: [
            'Industrial doors & gates',
            'Safety barriers & fencing',
            'Warehouse partitioning',
            'Weather-resistant structures',
            'Heavy-duty fabrications',
            'Custom industrial solutions'
        ],
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
    },
    {
        icon: Landmark,
        title: 'Government & Public Projects',
        description: 'Large-scale infrastructure, public buildings, and civic architecture for government institutions.',
        services: [
            'Public building facades',
            'Government office systems',
            'Public infrastructure (bus shelters, kiosks)',
            'Educational facility windows & doors',
            'Healthcare facility solutions',
            'Compliance with public standards'
        ],
        image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=80'
    },
    {
        icon: ShieldCheck,
        title: 'High-Security Installations',
        description: 'Bulletproof glass and reinforced systems for banks, embassies, VIP residences, and high-security facilities.',
        services: [
            'Bulletproof glass systems',
            'Blast-resistant installations',
            'Security-rated doors & windows',
            'Reinforced metal structures',
            'Access control integration',
            'Perimeter security solutions'
        ],
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80'
    }
];

export default function Industries() {
    return (
        <>
            <PageHeader
                tag="Industries We Serve"
                title="Solutions for Every Sector"
                subtitle="From residential homes to high-security government installations, we deliver tailored metal and glass solutions across all construction sectors."
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="space-y-24">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Image */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="relative">
                                        <img
                                            src={industry.image}
                                            alt={industry.title}
                                            className="w-full h-[450px] object-cover rounded-xl shadow-2xl"
                                        />
                                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-xl">
                                            <industry.icon className="w-10 h-10 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
                                        {industry.title}
                                    </span>

                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                        {industry.title}
                                    </h2>

                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                        {industry.description}
                                    </p>

                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Our Services:</h3>
                                        <div className="grid grid-cols-1 gap-3">
                                            {industry.services.map((service, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-slate-700">{service}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            No matter your industry, we have the expertise and solutions to bring your vision to life.
                        </p>
                        <a
                            href={`mailto:alumetal90@gmail.com`}
                            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                        >
                            Contact Us Today
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}