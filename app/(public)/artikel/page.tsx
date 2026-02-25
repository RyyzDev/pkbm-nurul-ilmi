// ============================================================
// Artikel List Page
// ============================================================

import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";

export const metadata: Metadata = {
    title: PAGE_SEO.ARTICLES.title,
    description: PAGE_SEO.ARTICLES.description,
};

export default function ArtikelPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Artikel</h1>
            <p className="mt-4 text-gray-600">
                Halaman artikel akan segera tersedia.
            </p>
            {/* Add ArticleList with ArticleCards from features/article */}
        </div>
    );
}
