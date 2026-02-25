// ============================================================
// PPDB Service — Submit & Manage Submissions
// ============================================================

import { apiClient, API_ENDPOINTS } from "./api";
import type { ApiResponse, PaginatedResponse } from "@/types/api";
import type { PPDBSubmission, PPDBFormData, PPDBQueryParams, PPDBStatus } from "@/types/models";

export const ppdbService = {
    /**
     * Public: Submit a new PPDB registration
     */
    submit: async (payload: PPDBFormData): Promise<ApiResponse<PPDBSubmission>> => {
        const { data } = await apiClient.post(API_ENDPOINTS.PPDB.SUBMIT, payload);
        return data;
    },

    /**
     * Admin: List all submissions with filters
     */
    list: async (params?: PPDBQueryParams): Promise<PaginatedResponse<PPDBSubmission>> => {
        const { data } = await apiClient.get(API_ENDPOINTS.PPDB.LIST, { params });
        return data;
    },

    /**
     * Admin: Get submission detail
     */
    detail: async (id: number): Promise<ApiResponse<PPDBSubmission>> => {
        const { data } = await apiClient.get(API_ENDPOINTS.PPDB.DETAIL(id));
        return data;
    },

    /**
     * Admin: Update submission status
     */
    updateStatus: async (
        id: number,
        status: PPDBStatus,
        notes?: string
    ): Promise<ApiResponse<PPDBSubmission>> => {
        const { data } = await apiClient.patch(API_ENDPOINTS.PPDB.UPDATE_STATUS(id), {
            status,
            notes,
        });
        return data;
    },
};
