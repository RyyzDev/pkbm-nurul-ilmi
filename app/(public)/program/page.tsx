// ============================================================
// Program Page
// ============================================================

import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";

export const metadata: Metadata = {
    title: PAGE_SEO.PROGRAMS.title,
    description: PAGE_SEO.PROGRAMS.description,
};

export default function ProgramPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Program</h1>
            <p className="mt-4 text-gray-600">
                Halaman program akan segera tersedia.
            </p>
            {/* Add ProgramCard, ProgramList from features/program */}
        </div>
    );
}
