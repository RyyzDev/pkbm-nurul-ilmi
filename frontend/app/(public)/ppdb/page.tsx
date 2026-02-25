// ============================================================
// PPDB Page
// ============================================================

import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";

export const metadata: Metadata = {
    title: PAGE_SEO.PPDB.title,
    description: PAGE_SEO.PPDB.description,
};

export default function PPDBPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
                Penerimaan Peserta Didik Baru
            </h1>
            <p className="mt-4 text-gray-600">
                Halaman PPDB akan segera tersedia.
            </p>
            {/* Add RegistrationFlow, RequirementList, ScheduleInfo, FAQ from features/ppdb */}
        </div>
    );
}
