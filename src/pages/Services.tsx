import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Palette, Factory, Wrench, Headset, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Palette,
        title: 'Design & Consultation',
        description: 'Collaborative design process ensuring your vision translates perfectly to technical reality.',
        features: ['Technical site surveys', 'CAD / 3D visualization', 'Material selection advice', 'Value engineering']
    },
    {
        icon: Factory,
        title: 'Fabrication & Manufacturing',
        description: 'Precision manufacturing in our state-of-the-art facility using advanced machinery.',
        features: ['Computerized cutting', 'Automated assembly', 'Quality control checks', 'High-volume capacity']
    },
    {
        icon: Wrench,
        title: 'Professional Installation',
        description: 'Expert installation by certified teams ensuring safety, accuracy, and longevity.',
        features: ['Certified installers', 'Safety compliance', 'Efficient scheduling', 'Site cleanup']
    },
    {
        icon: Headset,
        title: 'After-Sales Support',
        description: 'Comprehensive maintenance and support to ensure your systems perform harmoniously for years.',
        features: ['Preventative maintenance', 'Warranty support', 'Emergency repairs', 'Cleaning guidelines']
    }
];

export default function Services() {
    return (
        <>
            <PageHeader
                tag="Our Services"
                title="End-to-End Metal & Glass Solutions"
                subtitle="From initial concept to final installation and maintenance, we handle every aspect of your project."
                backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300">
                                            <service.icon className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                                                    <span className="text-slate-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
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
