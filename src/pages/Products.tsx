import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { motion } from 'framer-motion';
import { Layers, Shield, Building2, PanelTop, Combine, CheckCircle, Palette, Leaf, Volume2, Sun, Lock, Store, BusFront, Fence, Frame, Wind, Thermometer, Maximize2, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react';

export default function Products() {
    return (
        <>
            <PageHeader
                tag="Our Products"
                title="Comprehensive Metal & Glass Solutions"
                subtitle="From powder coating to architectural glass systems, we deliver end-to-end solutions for every construction need."
                backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            />

            {/* 1. Powder Coating */}
            <section id="powder-coating" className="py-24 bg-white relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 -mr-32 -z-0" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="mb-16">
                        <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-4">
                            01
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Powder-Coated Metal & Aluminium</h2>
                        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                            Our advanced powder coating process delivers a finish that's not only beautiful
                            but also incredibly durable. The electrostatic application ensures even coverage
                            and superior adhesion, creating a protective barrier against corrosion, UV damage, and wear.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Palette, label: '100+ Colors' },
                                { icon: Shield, label: 'Corrosion Resistant' },
                                { icon: Leaf, label: 'Eco-Friendly' },
                                { icon: CheckCircle, label: 'Long-Lasting' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-cyan-600" />
                                    </div>
                                    <span className="font-medium text-slate-700">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                            alt="Powder coating"
                            className="rounded-xl shadow-lg h-64 w-full object-cover"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Architectural Elements", desc: "Window frames, door frames, curtain walls", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" },
                            { title: "Metal Furniture", desc: "Office furniture, outdoor fixtures", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80" },
                            { title: "Industrial Equipment", desc: "Machinery parts, protective covers", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" }
                        ].map((app, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-xl aspect-video">
                                <img src={app.img} alt={app.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-bold">{app.title}</h4>
                                    <p className="text-xs text-slate-300">{app.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Glass Solutions */}
            <section id="glass-solutions" className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-16">
                        <span className="inline-block px-3 py-1 bg-cyan-900 text-cyan-300 text-sm font-medium rounded-full mb-4">
                            02
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Laminated & Safety Glass</h2>
                        <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
                            Premium glass solutions combining safety, security, and performance. From sound insulation to bulletproof protection.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { icon: Shield, title: "Safety Lamination", desc: "Holds together when shattered" },
                            { icon: Sun, title: "UV Protection", desc: "Filters harmful rays" },
                            { icon: Volume2, title: "Sound Insulation", desc: "Reduces noise pollution" },
                            { icon: Lock, title: "High Security", desc: "Bullet & blast resistance" }
                        ].map((feat, i) => (
                            <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <feat.icon className="w-8 h-8 text-cyan-400 mb-4" />
                                <h3 className="font-bold mb-2">{feat.title}</h3>
                                <p className="text-sm text-slate-400">{feat.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Standard Laminated", features: ["Safety interlayer", "UV protection", "Clear/Tinted"], use: "Residential & commercial windows" },
                            { title: "Acoustic Glass", features: ["Enhanced dampening", "Up to 50% noise reduction"], use: "Offices, hotels, urban homes" },
                            { title: "Security Glass", features: ["Forced entry resistance", "Impact protection"], use: "Storefronts, jewelry stores" },
                            { title: "Bulletproof Glass", features: ["Polycarbonate interlayers", "Certified levels"], use: "Banks, embassies, VIP" }
                        ].map((type, i) => (
                            <div key={i} className="bg-slate-800 p-6 rounded-xl border-l-4 border-cyan-500">
                                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {type.features.map((f, j) => (
                                        <span key={j} className="text-xs bg-slate-700 px-2 py-1 rounded">{f}</span>
                                    ))}
                                </div>
                                <p className="text-sm text-slate-400">Ideal for: {type.use}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Metal Structures */}
            <section id="structures" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-16">
                        <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-4">
                            03
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Metal Furniture & Structures</h2>
                        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                            Expertly fabricated metal structures designed for durability and aesthetic appeal, from kiosks to architectural balustrades.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { icon: Store, title: "Commercial Kiosks", desc: "Custom kiosks for retail and service points" },
                            { icon: BusFront, title: "Bus Shelters", desc: "Weather-resistant public infrastructure" },
                            { icon: Fence, title: "Balustrades", desc: "Glass or metal infill railings" },
                            { icon: Building2, title: "Glass Canopies", desc: "Modern entrance coverage systems" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-cyan-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Windows & Doors */}
            <section id="windows" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-16">
                        <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-4">
                            04
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Windows, Doors & Curtain Walls</h2>
                        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                            Energy-efficient aluminium systems with double glazing and argon gas filling. Modern aesthetics meets superior performance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { title: "Sliding Windows", img: "https://plus.unsplash.com/premium_photo-1661906854568-8964f58ed859?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { title: "Casement Windows", img: "https://images.unsplash.com/photo-1760017768977-4b17bf26b9d7?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { title: "Aluminium Doors", img: "https://plus.unsplash.com/premium_photo-1674815329569-62c9a2529f85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { title: "Curtain Walls", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" }
                        ].map((p, i) => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden shadow">
                                <div className="h-48 overflow-hidden">
                                    <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-900">{p.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-cyan-900 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4">Energy Efficiency That Saves</h3>
                            <p className="text-cyan-100 leading-relaxed max-w-xl">
                                Our double-glazed units with argon gas provide exceptional thermal insulation,
                                reducing heat transfer by up to 50% and significantly lowering your air conditioning costs.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                                <Thermometer className="w-6 h-6 mb-2 text-cyan-400" />
                                <div className="text-sm font-medium">Thermal Insulation</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                                <Wind className="w-6 h-6 mb-2 text-cyan-400" />
                                <div className="text-sm font-medium">Weather Sealed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Hybrid Systems (Innovation) */}
            <section id="hybrid-systems" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-4">
                                05
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Hybrid Steel & Aluminium Systems
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                The future of architectural metal - combining the structural strength of steel
                                with the durability and aesthetics of aluminium.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    { icon: Shield, title: "Superior Strength", desc: "Steel backbone for large spans" },
                                    { icon: Zap, title: "Enhanced Durability", desc: "Aluminium corrosion resistance" },
                                    { icon: TrendingUp, title: "Slim Profiles", desc: "Larger glass areas" },
                                    { icon: Clock, title: "50+ Year Lifespan", desc: "Engineered for longevity" }
                                ].map((adv, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <adv.icon className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{adv.title}</h4>
                                            <p className="text-sm text-slate-600">{adv.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
                                alt="Hybrid System"
                                className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
