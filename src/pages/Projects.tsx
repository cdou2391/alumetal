import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { motion } from 'framer-motion';
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton';
import LogoCarousel from '@/components/home/LogoCarousel';

const projects = [
    {
        title: "Kigali Heights",
        category: "Commercial Facade",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
        title: "Vision City",
        category: "Residential Glazing",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    },
    {
        title: "Norrsken House",
        category: "Industrial Steel",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    },
    {
        title: "Convention Centre",
        category: "Custom Structure",
        image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=80"
    },
    {
        title: "M&M Plaza",
        category: "Curtain Walls",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
    },
    {
        title: "Green Hills Academy",
        category: "Institutional",
        image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
    }
];

export default function Projects() {
    return (
        <>
            <PageHeader
                tag="Our Portfolio"
                title="Featured Projects"
                subtitle="A showcase of our finest metal and glass installations across Rwanda."
                backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                            >
                                <ImageWithSkeleton
                                    src={project.image}
                                    alt={project.title}
                                    className="group-hover:scale-110 transition-transform duration-700"
                                    containerClassName="w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <div className="text-cyan-400 text-sm font-medium mb-1">{project.category}</div>
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trusted By */}
                    <div className="border-t border-slate-200 pt-16">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold text-slate-900">Trusted Industry Leaders</h3>
                        </div>
                        <LogoCarousel />
                    </div>
                </div>
            </section>
        </>
    );
}
