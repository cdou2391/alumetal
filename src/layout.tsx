import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children, currentPageName }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: 'Home' },
        { name: 'About Us', href: 'About' },
        { name: 'Products', href: 'Products' },
        { name: 'Services', href: 'Services' },
        { name: 'Projects', href: 'Projects' },
        { name: 'Contact Us', href: 'Contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Top bar */}
            <div className="bg-slate-900 text-slate-300 text-sm border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                            <a href="tel:+250788359030" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                                <Phone className="w-4 h-4" />
                                <span>+250 788 359 030</span>
                            </a>
                            <a href="mailto:alumetal90@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-cyan-400 transition-colors">
                                <Mail className="w-4 h-4" />
                                <span>alumetal90@gmail.com</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                            <MapPin className="w-4 h-4" />
                            <span>Kigali, Rwanda</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className={`fixed left-0 right-0 z-50 mx-4 xl:mx-auto max-w-7xl rounded-full border border-white/20 transition-all duration-300 ${isScrolled ? 'top-4 bg-white/90 backdrop-blur-md shadow-xl' : 'top-10 bg-white/70 backdrop-blur-md shadow-lg'
                }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to={createPageUrl('Home')} className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded flex items-center justify-center">
                                <span className="text-cyan-400 font-bold text-xl">A</span>
                            </div>
                            <div>
                                <div className="text-slate-900 font-bold text-xl tracking-tight">AluMetal Ltd</div>
                                <div className="text-slate-500 text-xs">Premium Metal Solutions</div>
                            </div>
                        </Link>

                        {/* Desktop navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={createPageUrl(item.href)}
                                    className={`text-slate-700 hover:text-cyan-600 font-medium transition-colors ${currentPageName === item.href ? 'text-cyan-600' : ''
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link to={createPageUrl('Contact')}>
                                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                                    Get Quote
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-slate-700"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden py-4 border-t border-slate-200">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={createPageUrl(item.href)}
                                    className="block px-4 py-3 text-slate-700 hover:bg-slate-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="px-4 py-3">
                                <Link to={createPageUrl('Contact')} onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                                        Get Quote
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Main content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Company info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">A</span>
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">AluMetal Ltd</div>
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Premium metal, aluminium, and glass solutions for the region's growing infrastructure.
                                Over 20 years of expertise.
                            </p>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h3 className="text-white font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link to={createPageUrl('About')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
                                <li><Link to={createPageUrl('Products')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Our Products</Link></li>
                                <li><Link to={createPageUrl('Services')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Services</Link></li>
                                <li><Link to={createPageUrl('Projects')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Projects</Link></li>
                                <li><Link to={createPageUrl('Contact')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h3 className="text-white font-bold mb-4">Our Products</h3>
                            <ul className="space-y-2">
                                <li><Link to={createPageUrl('Products')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Powder Coating</Link></li>
                                <li><Link to={createPageUrl('Products')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Safety Glass</Link></li>
                                <li><Link to={createPageUrl('Products')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Metal Structures</Link></li>
                                <li><Link to={createPageUrl('Products')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Windows & Doors</Link></li>
                                <li><Link to={createPageUrl('Products')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Hybrid Systems</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white font-bold mb-4">Contact Us</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm">
                                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-400">Kigali, Rwanda</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    <a href="tel:+250788359030" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                        +250 788 359 030
                                    </a>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    <a href="mailto:alumetal90@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors break-all">
                                        alumetal90@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="pt-8 border-t border-slate-800">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-slate-500 text-sm">
                                © {new Date().getFullYear()} AluMetal Ltd. All rights reserved.
                            </p>
                            <p className="text-slate-500 text-sm">
                                Premium Metal, Aluminium & Glass Solutions
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}