// ============================================================
// Query Key Factory — Single source of truth for cache keys
// ============================================================

export const queryKeys = {
    // ── Auth ───────────────────────────────────────────────────
    auth: {
        me: ["auth", "me"] as const,
    },

    // ── Programs ───────────────────────────────────────────────
    programs: {
        all: ["programs"] as const,
        lists: () => [...queryKeys.programs.all, "list"] as const,
        list: (params: object) =>
            [...queryKeys.programs.lists(), params] as const,
        details: () => [...queryKeys.programs.all, "detail"] as const,
        detail: (id: number) => [...queryKeys.programs.details(), id] as const,
    },

    // ── Sub-Programs ───────────────────────────────────────────
    subPrograms: {
        all: ["sub-programs"] as const,
        lists: () => [...queryKeys.subPrograms.all, "list"] as const,
        list: (params: object) =>
            [...queryKeys.subPrograms.lists(), params] as const,
        details: () => [...queryKeys.subPrograms.all, "detail"] as const,
        detail: (id: number) => [...queryKeys.subPrograms.details(), id] as const,
    },

    // ── Articles ───────────────────────────────────────────────
    articles: {
        all: ["articles"] as const,
        lists: () => [...queryKeys.articles.all, "list"] as const,
        list: (params: object) =>
            [...queryKeys.articles.lists(), params] as const,
        details: () => [...queryKeys.articles.all, "detail"] as const,
        detail: (idOrSlug: number | string) =>
            [...queryKeys.articles.details(), idOrSlug] as const,
    },

    // ── Categories ─────────────────────────────────────────────
    categories: {
        all: ["categories"] as const,
        lists: () => [...queryKeys.categories.all, "list"] as const,
        list: (params: object) =>
            [...queryKeys.categories.lists(), params] as const,
        details: () => [...queryKeys.categories.all, "detail"] as const,
        detail: (id: number) => [...queryKeys.categories.details(), id] as const,
    },

    // ── PPDB ───────────────────────────────────────────────────
    ppdb: {
        all: ["ppdb"] as const,
        lists: () => [...queryKeys.ppdb.all, "list"] as const,
        list: (params: object) =>
            [...queryKeys.ppdb.lists(), params] as const,
        details: () => [...queryKeys.ppdb.all, "detail"] as const,
        detail: (id: number) => [...queryKeys.ppdb.details(), id] as const,
    },

    // ── Settings ───────────────────────────────────────────────
    settings: {
        all: ["settings"] as const,
        get: () => [...queryKeys.settings.all, "get"] as const,
    },
} as const;
