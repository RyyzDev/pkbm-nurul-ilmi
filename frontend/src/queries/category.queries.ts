// ============================================================
// Category Queries — React Query hooks for article categories
// ============================================================

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { categoryService } from "@/services/category.service";
import type { ListQueryParams } from "@/types/api";
import type { ArticleCategoryFormData } from "@/types/models";

export function useCategories(params?: ListQueryParams) {
    return useQuery({
        queryKey: queryKeys.categories.list(params ?? {}),
        queryFn: () => categoryService.list(params),
    });
}

export function useCategory(id: number) {
    return useQuery({
        queryKey: queryKeys.categories.detail(id),
        queryFn: () => categoryService.detail(id),
        enabled: !!id,
    });
}

export function useCreateCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (payload: ArticleCategoryFormData) => categoryService.create(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.categories.lists() });
        },
    });
}

export function useUpdateCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, payload }: { id: number; payload: ArticleCategoryFormData }) =>
            categoryService.update(id, payload),
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries({ queryKey: queryKeys.categories.lists() });
            queryClient.invalidateQueries({
                queryKey: queryKeys.categories.detail(variables.id),
            });
        },
    });
}

export function useDeleteCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => categoryService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.categories.lists() });
        },
    });
}
