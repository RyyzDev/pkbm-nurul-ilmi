import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import HeroSection from "@/features/home/components/hero-section";

export const metadata: Metadata = {
    title: PAGE_SEO.HOME.title,
    description: PAGE_SEO.HOME.description,
};

export default function HomePage() {
    return (
        <>
            <HeroSection />
            {/* Additional sections will be added here:
          - StatsSection
          - ProgramHighlight 
          - TestimonialSection
          - CTASection 
      */}
        </>
    );
}
