// ============================================================
// Application Route Constants
// ============================================================

export const ROUTES = {
    // ── Public Routes ──────────────────────────────────────────
    PUBLIC: {
        HOME: "/",
        ABOUT: "/tentang-kami",
        PROGRAMS: "/program",
        PPDB: "/ppdb",
        ARTICLES: "/artikel",
        ARTICLE_DETAIL: (slug: string) => `/artikel/${slug}` as const,
    },

    // ── Auth Routes ────────────────────────────────────────────
    AUTH: {
        LOGIN: "/login",
    },

    // ── Admin Routes ───────────────────────────────────────────
    ADMIN: {
        DASHBOARD: "/admin/dashboard",
        PROGRAMS: "/admin/programs",
        SUB_PROGRAMS: "/admin/sub-programs",
        ARTICLES: "/admin/articles",
        ARTICLE_EDIT: (id: number) => `/admin/articles/${id}` as const,
        ARTICLE_CREATE: "/admin/articles/create",
        CATEGORIES: "/admin/article-categories",
        PPDB_SUBMISSIONS: "/admin/ppdb-submissions",
        SETTINGS: "/admin/settings",
    },
} as const;
