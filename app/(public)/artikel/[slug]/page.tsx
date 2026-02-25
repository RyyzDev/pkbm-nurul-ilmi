// ============================================================
// Artikel Detail Page (Dynamic Route)
// ============================================================

interface ArtikelDetailPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArtikelDetailPageProps) {
    const { slug } = await params;
    // TODO: Fetch article by slug and return dynamic metadata
    return {
        title: slug.replace(/-/g, " "),
    };
}

export default async function ArtikelDetailPage({ params }: ArtikelDetailPageProps) {
    const { slug } = await params;

    return (
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
                {slug.replace(/-/g, " ")}
            </h1>
            <p className="mt-4 text-gray-600">
                Konten artikel akan segera tersedia.
            </p>
            {/* Add ArticleContent from features/article */}
        </div>
    );
}
