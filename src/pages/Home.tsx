import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSnapshot from '@/components/home/AboutSnapshot';
import SolutionsGrid from '@/components/home/SolutionsGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import IndustriesServed from '@/components/home/IndustriesServed';
import CTASection from '@/components/home/CTASection';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutSnapshot />
            <SolutionsGrid />
            <WhyChooseUs />
            <IndustriesServed />
            <CTASection />
        </main>
    );
}