// ============================================================
// Program Service — CRUD API calls
// ============================================================

import { apiClient, API_ENDPOINTS } from "./api";
import type { ApiResponse, PaginatedResponse, ListQueryParams } from "@/types/api";
import type { Program, ProgramFormData } from "@/types/models";

export const programService = {
    list: async (params?: ListQueryParams): Promise<PaginatedResponse<Program>> => {
        const { data } = await apiClient.get(API_ENDPOINTS.PROGRAMS.LIST, { params });
        return data;
    },

    detail: async (id: number): Promise<ApiResponse<Program>> => {
        const { data } = await apiClient.get(API_ENDPOINTS.PROGRAMS.DETAIL(id));
        return data;
    },

    create: async (payload: ProgramFormData): Promise<ApiResponse<Program>> => {
        const formData = new FormData();
        Object.entries(payload).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                formData.append(key, value instanceof File ? value : String(value));
            }
        });
        const { data } = await apiClient.post(API_ENDPOINTS.PROGRAMS.CREATE, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return data;
    },

    update: async (id: number, payload: ProgramFormData): Promise<ApiResponse<Program>> => {
        const formData = new FormData();
        formData.append("_method", "PUT");
        Object.entries(payload).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                formData.append(key, value instanceof File ? value : String(value));
            }
        });
        const { data } = await apiClient.post(API_ENDPOINTS.PROGRAMS.UPDATE(id), formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return data;
    },

    delete: async (id: number): Promise<ApiResponse<null>> => {
        const { data } = await apiClient.delete(API_ENDPOINTS.PROGRAMS.DELETE(id));
        return data;
    },
};
