// src/app/page.tsx
'use client';

import HeroSection from "@/components/layout/HeroSection";
import ServicesSection from "@/components/Service/ServicesSection";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import TestimonialSection from "@/components/Testimonial/TestimonialSection";
import FaqSection from "@/components/FAQ/FaqSection";
import BlogSection from "@/components/blog/BlogSection";
import CtaSection from "@/components/CTA/CtaSection";

export default function HomePage() {

    return (
        <div>
            <HeroSection/>
            <ServicesSection/>
            <PortfolioSection/>
            <FaqSection/>
            <BlogSection/>
            <CtaSection/>
        </div>
    );
}
