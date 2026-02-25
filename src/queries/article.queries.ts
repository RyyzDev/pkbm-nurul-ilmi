// ============================================================
// Article Queries — React Query hooks for articles
// ============================================================

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { articleService } from "@/services/article.service";
import type { ListQueryParams } from "@/types/api";
import type { ArticleFormData } from "@/types/models";

/**
 * Fetch paginated list of articles
 */
export function useArticles(
    params?: ListQueryParams & { category_id?: number; is_published?: boolean }
) {
    return useQuery({
        queryKey: queryKeys.articles.list(params ?? {}),
        queryFn: () => articleService.list(params),
    });
}

/**
 * Fetch a single article by ID or slug
 */
export function useArticle(idOrSlug: number | string) {
    return useQuery({
        queryKey: queryKeys.articles.detail(idOrSlug),
        queryFn: () => articleService.detail(idOrSlug),
        enabled: !!idOrSlug,
    });
}

/**
 * Create a new article
 */
export function useCreateArticle() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: ArticleFormData) => articleService.create(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.articles.lists() });
        },
    });
}

/**
 * Update an existing article
 */
export function useUpdateArticle() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, payload }: { id: number; payload: ArticleFormData }) =>
            articleService.update(id, payload),
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.articles.lists() });
            queryClient.invalidateQueries({
                queryKey: queryKeys.articles.detail(variables.id),
            });
        },
    });
}

/**
 * Delete an article
 */
export function useDeleteArticle() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => articleService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.articles.lists() });
        },
    });
}
