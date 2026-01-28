import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import CTASection from '@/components/home/CTASection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
        </main>
    );
}