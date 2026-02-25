import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import HeroSection from "@/features/about/components/hero-section";

export const metadata: Metadata = {
    title: PAGE_SEO.ABOUT.title,
    description: PAGE_SEO.ABOUT.description,
};

export default function AboutPage() {
    return (
        <HeroSection />
    );
}
