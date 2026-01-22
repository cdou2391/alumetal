import React, { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        toast.success('Message sent! We\'ll get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            message: ''
        });
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <PageHeader
                tag="Contact Us"
                title="Let's Build Something Great Together"
                subtitle="Get in touch with our team to discuss your project requirements and receive a detailed quote."
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Get In Touch
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Have a question about our products or services? Need a quote for your project?
                                Our team is here to help.
                            </p>

                            <div className="space-y-6">
                                <a
                                    href="tel:+250788359030"
                                    className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-slate-500 text-sm mb-1">Call Us</div>
                                        <div className="text-slate-900 font-semibold text-lg">+250 788 359 030</div>
                                        <div className="text-slate-600 text-sm mt-1">Monday - Saturday, 8:00 AM - 6:00 PM</div>
                                    </div>
                                </a>

                                <a
                                    href="mailto:alumetal90@gmail.com"
                                    className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-slate-500 text-sm mb-1">Email Us</div>
                                        <div className="text-slate-900 font-semibold text-lg">alumetal90@gmail.com</div>
                                        <div className="text-slate-600 text-sm mt-1">We'll respond within 24 hours</div>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-slate-500 text-sm mb-1">Visit Us</div>
                                        <div className="text-slate-900 font-semibold text-lg">Kigali, Rwanda</div>
                                        <div className="text-slate-600 text-sm mt-1">Showroom & Manufacturing Facility</div>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/250788359030"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-6 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-green-600 text-sm mb-1">WhatsApp</div>
                                        <div className="text-slate-900 font-semibold text-lg">Quick Message</div>
                                        <div className="text-slate-600 text-sm mt-1">Get instant support</div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-slate-50 rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Your Name *
                                            </label>
                                            <Input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="bg-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Email Address *
                                            </label>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                                className="bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Phone Number
                                            </label>
                                            <Input
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+250 ..."
                                                className="bg-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Company Name
                                            </label>
                                            <Input
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your Company"
                                                className="bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Project Type
                                        </label>
                                        <Input
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            placeholder="e.g., Residential windows, Commercial curtain wall"
                                            className="bg-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Project Details *
                                        </label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Tell us about your project requirements..."
                                            className="bg-white"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6 text-lg font-semibold"
                                    >
                                        {isSubmitting ? 'Sending...' : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}