import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function CTASection() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=1920&q=80"
                    alt="Metal fabrication"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
                            <span className="w-8 h-px bg-cyan-400" />
                            Start Your Project
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Your Vision,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-slate-300">
                                Our Expertise
                            </span>
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
                            Ready to bring your architectural vision to life? Our team of experts
                            is here to guide you from concept to completion. Contact us today
                            for a free consultation and quote.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to={createPageUrl('Contact')}>
                                <Button
                                    size="lg"
                                    className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-8 py-6 text-base group w-full sm:w-auto"
                                >
                                    Request a Consultation
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Quick Contact</h3>

                            <div className="space-y-4">
                                <a
                                    href="tel:+250788359030"
                                    className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                                        <Phone className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm">Call Us</div>
                                        <div className="text-white font-semibold">+250 788 359 030</div>
                                    </div>
                                </a>

                                <a
                                    href="mailto:alumetal90@gmail.com"
                                    className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                                        <Mail className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm">Email Us</div>
                                        <div className="text-white font-semibold">alumetal90@gmail.com</div>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/250788359030"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-green-900/30 border border-green-700/30 rounded-lg hover:bg-green-900/50 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                                        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-green-400/70 text-sm">WhatsApp</div>
                                        <div className="text-green-400 font-semibold">Quick Message</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}