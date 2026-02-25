// ============================================================
// Article Domain Models
// ============================================================

export interface Article {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    thumbnail: string | null;
    category_id: number;
    category?: ArticleCategory;
    author: string;
    is_published: boolean;
    published_at: string | null;
    views_count: number;
    created_at: string;
    updated_at: string;
}

/**
 * Lighter type for article list views (no content)
 */
export interface ArticleListItem {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    thumbnail: string | null;
    category?: ArticleCategory;
    author: string;
    is_published: boolean;
    published_at: string | null;
    views_count: number;
    created_at: string;
}

export interface ArticleCategory {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    articles_count?: number;
    created_at: string;
    updated_at: string;
}

/**
 * Form data for creating/updating articles
 */
export interface ArticleFormData {
    title: string;
    excerpt: string;
    content: string;
    thumbnail?: File | null;
    category_id: number;
    is_published: boolean;
}

/**
 * Form data for creating/updating article categories
 */
export interface ArticleCategoryFormData {
    name: string;
    description: string | null;
}
