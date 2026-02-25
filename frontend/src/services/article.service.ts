// ============================================================
// Article Service — CRUD API calls
// ============================================================

import { apiClient, API_ENDPOINTS } from "./api";
import type { ApiResponse, PaginatedResponse, ListQueryParams } from "@/types/api";
import type { Article, ArticleListItem, ArticleFormData } from "@/types/models";

export const articleService = {
    list: async (
        params?: ListQueryParams & { category_id?: number; is_published?: boolean }
    ): Promise<PaginatedResponse<ArticleListItem>> => {
        const { data } = await apiClient.get(API_ENDPOINTS.ARTICLES.LIST, { params });
        return data;
    },

    detail: async (idOrSlug: number | string): Promise<ApiResponse<Article>> => {
        const { data } = await apiClient.get(API_ENDPOINTS.ARTICLES.DETAIL(idOrSlug));
        return data;
    },

    create: async (payload: ArticleFormData): Promise<ApiResponse<Article>> => {
        const formData = new FormData();
        Object.entries(payload).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                formData.append(key, value instanceof File ? value : String(value));
            }
        });
        const { data } = await apiClient.post(API_ENDPOINTS.ARTICLES.CREATE, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return data;
    },

    update: async (id: number, payload: ArticleFormData): Promise<ApiResponse<Article>> => {
        const formData = new FormData();
        formData.append("_method", "PUT");
        Object.entries(payload).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                formData.append(key, value instanceof File ? value : String(value));
            }
        });
        const { data } = await apiClient.post(API_ENDPOINTS.ARTICLES.UPDATE(id), formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return data;
    },

    delete: async (id: number): Promise<ApiResponse<null>> => {
        const { data } = await apiClient.delete(API_ENDPOINTS.ARTICLES.DELETE(id));
        return data;
    },
};
