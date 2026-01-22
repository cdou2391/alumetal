import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function AboutSnapshot() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
                                alt="Metal fabrication workshop"
                                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-lg shadow-xl">
                                <div className="flex items-center gap-4">
                                    <Award className="w-12 h-12 text-cyan-400" />
                                    <div>
                                        <div className="text-4xl font-bold">20+</div>
                                        <div className="text-slate-300 text-sm">Years of Excellence</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-slate-200 rounded-lg -z-10" />
                    </motion.div>

                    {/* Content side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 text-cyan-600 text-sm font-medium tracking-wider uppercase mb-4">
                            <span className="w-8 h-px bg-cyan-600" />
                            About AluMetal Ltd
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            20+ Years of{' '}
                            <span className="text-slate-500">Expertise</span>
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            AluMetal Ltd is a premier manufacturer and fabricator of high-quality metal,
                            aluminium, and glass products based in Rwanda. Built on over two decades of
                            industry experience, we bring world-class craftsmanship and innovative
                            solutions to the Rwandan market and beyond.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-8">
                            Our commitment to excellence, combined with state-of-the-art production
                            facilities, enables us to deliver products that meet international safety
                            standards while catering to the unique requirements of each project.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {[
                                'ISO Certified Quality',
                                'Custom Fabrication',
                                'Expert Installation',
                                'After-Sales Support'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link to={createPageUrl('About')}>
                            <Button className="bg-slate-900 hover:bg-slate-800 text-white group">
                                Learn More About Us
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}