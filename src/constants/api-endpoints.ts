// ============================================================
// API Endpoint Constants
// ============================================================

const BASE = "/api" as const;

export const API_ENDPOINTS = {
    // ── Auth ───────────────────────────────────────────────────
    AUTH: {
        LOGIN: `${BASE}/auth/login`,
        LOGOUT: `${BASE}/auth/logout`,
        ME: `${BASE}/auth/me`,
    },

    // ── Programs ───────────────────────────────────────────────
    PROGRAMS: {
        LIST: `${BASE}/programs`,
        DETAIL: (id: number) => `${BASE}/programs/${id}`,
        CREATE: `${BASE}/programs`,
        UPDATE: (id: number) => `${BASE}/programs/${id}`,
        DELETE: (id: number) => `${BASE}/programs/${id}`,
    },

    // ── Sub-Programs ───────────────────────────────────────────
    SUB_PROGRAMS: {
        LIST: `${BASE}/sub-programs`,
        DETAIL: (id: number) => `${BASE}/sub-programs/${id}`,
        CREATE: `${BASE}/sub-programs`,
        UPDATE: (id: number) => `${BASE}/sub-programs/${id}`,
        DELETE: (id: number) => `${BASE}/sub-programs/${id}`,
    },

    // ── Articles ───────────────────────────────────────────────
    ARTICLES: {
        LIST: `${BASE}/articles`,
        DETAIL: (idOrSlug: number | string) => `${BASE}/articles/${idOrSlug}`,
        CREATE: `${BASE}/articles`,
        UPDATE: (id: number) => `${BASE}/articles/${id}`,
        DELETE: (id: number) => `${BASE}/articles/${id}`,
    },

    // ── Article Categories ─────────────────────────────────────
    CATEGORIES: {
        LIST: `${BASE}/article-categories`,
        DETAIL: (id: number) => `${BASE}/article-categories/${id}`,
        CREATE: `${BASE}/article-categories`,
        UPDATE: (id: number) => `${BASE}/article-categories/${id}`,
        DELETE: (id: number) => `${BASE}/article-categories/${id}`,
    },

    // ── PPDB ───────────────────────────────────────────────────
    PPDB: {
        SUBMIT: `${BASE}/ppdb`,
        LIST: `${BASE}/ppdb`,
        DETAIL: (id: number) => `${BASE}/ppdb/${id}`,
        UPDATE_STATUS: (id: number) => `${BASE}/ppdb/${id}/status`,
    },

    // ── Settings ───────────────────────────────────────────────
    SETTINGS: {
        GET: `${BASE}/settings`,
        UPDATE: `${BASE}/settings`,
    },

    // ── Upload ─────────────────────────────────────────────────
    UPLOAD: {
        IMAGE: `${BASE}/upload/image`,
    },
} as const;
