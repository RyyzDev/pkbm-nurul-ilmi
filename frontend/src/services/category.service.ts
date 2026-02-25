// ============================================================
// Category Service — CRUD API calls
// ============================================================

import { apiClient, API_ENDPOINTS } from "./api";
import type { ApiResponse, PaginatedResponse, ListQueryParams } from "@/types/api";
import type { ArticleCategory, ArticleCategoryFormData } from "@/types/models";

export const categoryService = {
    list: async (params?: ListQueryParams): Promise<PaginatedResponse<ArticleCategory>> => {
        const { data } = await apiClient.get(API_ENDPOINTS.CATEGORIES.LIST, { params });
        return data;
    },

    detail: async (id: number): Promise<ApiResponse<ArticleCategory>> => {
        const { data } = await apiClient.get(API_ENDPOINTS.CATEGORIES.DETAIL(id));
        return data;
    },

    create: async (payload: ArticleCategoryFormData): Promise<ApiResponse<ArticleCategory>> => {
        const { data } = await apiClient.post(API_ENDPOINTS.CATEGORIES.CREATE, payload);
        return data;
    },

    update: async (
        id: number,
        payload: ArticleCategoryFormData
    ): Promise<ApiResponse<ArticleCategory>> => {
        const { data } = await apiClient.put(API_ENDPOINTS.CATEGORIES.UPDATE(id), payload);
        return data;
    },

    delete: async (id: number): Promise<ApiResponse<null>> => {
        const { data } = await apiClient.delete(API_ENDPOINTS.CATEGORIES.DELETE(id));
        return data;
    },
};
