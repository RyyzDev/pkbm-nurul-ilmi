// ============================================================
// Settings Service — Site Settings Management
// ============================================================

import { apiClient, API_ENDPOINTS } from "./api";
import type { ApiResponse } from "@/types/api";
import type { SiteSettings, SiteSettingsFormData } from "@/types/models";

export const settingsService = {
    get: async (): Promise<ApiResponse<SiteSettings>> => {
        const { data } = await apiClient.get(API_ENDPOINTS.SETTINGS.GET);
        return data;
    },

    update: async (payload: SiteSettingsFormData): Promise<ApiResponse<SiteSettings>> => {
        const formData = new FormData();
        Object.entries(payload).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                formData.append(key, value instanceof File ? value : String(value));
            }
        });
        formData.append("_method", "PUT");
        const { data } = await apiClient.post(API_ENDPOINTS.SETTINGS.UPDATE, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return data;
    },
};
