import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Building2, Store, BusFront, Fence } from 'lucide-react';
import { motion } from 'framer-motion';

const structures = [
    {
        icon: Store,
        title: 'Commercial Kiosks',
        description: 'Custom-designed metal kiosks for retail, food service, and information points with durable powder-coated finishes.',
        applications: ['Shopping malls', 'Airports', 'Public spaces', 'Events & exhibitions']
    },
    {
        icon: BusFront,
        title: 'Bus Shelters',
        description: 'Weather-resistant bus shelters combining steel structure with glass panels for public transportation infrastructure.',
        applications: ['Public transit stops', 'Urban infrastructure', 'Government projects', 'Private developments']
    },
    {
        icon: Fence,
        title: 'Balustrades & Railings',
        description: 'Architectural balustrades for balconies, staircases, and terraces with glass or metal infill options.',
        applications: ['Residential buildings', 'Commercial complexes', 'Hotels & resorts', 'Public buildings']
    },
    {
        icon: Building2,
        title: 'Glass Canopies',
        description: 'Modern glass canopy systems with metal framework for entrances, walkways, and outdoor spaces.',
        applications: ['Building entrances', 'Parking areas', 'Walkway coverage', 'Outdoor dining']
    }
];

const products = [
    {
        title: 'Table Stands & Furniture',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
        description: 'Custom metal furniture for commercial and residential applications'
    },
    {
        title: 'Security Gates & Fencing',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80',
        description: 'Robust security solutions with aesthetic appeal'
    },
    {
        title: 'Outdoor Structures',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80',
        description: 'Weather-resistant structures for public and private spaces'
    }
];

export default function SolutionStructures() {
    return (
        <>
            <PageHeader
                tag="Metal Structures"
                title="Custom Metal Furniture & Structures"
                subtitle="From commercial kiosks to architectural balustrades, we fabricate durable metal structures for any application."
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            />

            {/* Main structures */}
            <section className="py-24 bg-white">
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
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Expertly fabricated metal structures designed for durability and aesthetic appeal
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {structures.map((structure, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                                    <structure.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{structure.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">{structure.description}</p>

                                <div>
                                    <p className="text-sm font-semibold text-slate-700 mb-3">Applications:</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {structure.applications.map((app, j) => (
                                            <div key={j} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                                <span className="text-sm text-slate-600">{app}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product showcase */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product, i) => (
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
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                                        <p className="text-slate-300 text-sm">{product.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Custom Fabrication Excellence
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Every structure we create is custom-fabricated to meet your exact specifications.
                                Our experienced team works closely with architects, developers, and contractors
                                to deliver solutions that combine functionality with aesthetic appeal.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Custom design & engineering',
                                    'Premium powder-coated finishes',
                                    'Weather-resistant construction',
                                    'Professional installation services',
                                    'Compliance with safety standards',
                                    'Long-term durability guarantee'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                                alt="Metal fabrication"
                                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}