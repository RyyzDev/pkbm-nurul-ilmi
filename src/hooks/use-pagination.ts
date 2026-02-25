// ============================================================
// usePagination — Pagination state hook
// ============================================================

"use client";

import { useState, useCallback, useMemo } from "react";

interface UsePaginationOptions {
    initialPage?: number;
    initialPerPage?: number;
}

export function usePagination(options?: UsePaginationOptions) {
    const [page, setPage] = useState(options?.initialPage ?? 1);
    const [perPage, setPerPage] = useState(options?.initialPerPage ?? 10);

    const goToPage = useCallback((newPage: number) => {
        setPage(Math.max(1, newPage));
    }, []);

    const nextPage = useCallback(() => {
        setPage((prev) => prev + 1);
    }, []);

    const prevPage = useCallback(() => {
        setPage((prev) => Math.max(1, prev - 1));
    }, []);

    const resetPage = useCallback(() => {
        setPage(1);
    }, []);

    const params = useMemo(
        () => ({ page, per_page: perPage }),
        [page, perPage]
    );

    return {
        page,
        perPage,
        params,
        setPage: goToPage,
        setPerPage,
        nextPage,
        prevPage,
        resetPage,
    } as const;
}
