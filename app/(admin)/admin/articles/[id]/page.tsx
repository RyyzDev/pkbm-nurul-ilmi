// ============================================================
// Admin Article Edit Page (Dynamic Route)
// ============================================================

interface ArticleEditPageProps {
    params: Promise<{ id: string }>;
}

export default async function ArticleEditPage({ params }: ArticleEditPageProps) {
    const { id } = await params;

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900">
                Edit Artikel #{id}
            </h1>
            {/* Add ArticleEditor from features/admin/article-management */}
        </div>
    );
}
