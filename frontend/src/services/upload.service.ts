// ============================================================
// Upload Service — File Uploads
// ============================================================

import { apiClient, API_ENDPOINTS } from "./api";
import type { ApiResponse } from "@/types/api";

interface UploadResponse {
    url: string;
    path: string;
}

export const uploadService = {
    /**
     * Upload a single image (for rich text editor, etc.)
     */
    image: async (file: File): Promise<ApiResponse<UploadResponse>> => {
        const formData = new FormData();
        formData.append("image", file);
        const { data } = await apiClient.post(API_ENDPOINTS.UPLOAD.IMAGE, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return data;
    },
};
