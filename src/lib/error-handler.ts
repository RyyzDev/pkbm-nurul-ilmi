// ============================================================
// Centralized Error Handler
// ============================================================

import { AxiosError } from "axios";
import type { ApiError } from "@/types/api";

/**
 * Extract user-friendly error message from API errors
 */
export function getErrorMessage(error: unknown): string {
    if (error instanceof AxiosError) {
        const apiError = error.response?.data as ApiError | undefined;

        // Validation errors — return first error message
        if (apiError?.errors) {
            const firstField = Object.keys(apiError.errors)[0];
            if (firstField) {
                return apiError.errors[firstField][0];
            }
        }

        // Generic API error message
        if (apiError?.message) {
            return apiError.message;
        }

        // HTTP status-based fallback
        switch (error.response?.status) {
            case 401:
                return "Sesi Anda telah berakhir. Silakan login kembali.";
            case 403:
                return "Anda tidak memiliki akses untuk melakukan aksi ini.";
            case 404:
                return "Data yang diminta tidak ditemukan.";
            case 422:
                return "Data yang dikirim tidak valid.";
            case 500:
                return "Terjadi kesalahan pada server. Silakan coba lagi.";
            default:
                return "Terjadi kesalahan. Silakan coba lagi.";
        }
    }

    if (error instanceof Error) {
        return error.message;
    }

    return "Terjadi kesalahan yang tidak diketahui.";
}

/**
 * Extract validation errors map from API error
 */
export function getValidationErrors(
    error: unknown
): Record<string, string> | null {
    if (error instanceof AxiosError) {
        const apiError = error.response?.data as ApiError | undefined;
        if (apiError?.errors) {
            const flat: Record<string, string> = {};
            for (const [field, messages] of Object.entries(apiError.errors)) {
                flat[field] = messages[0];
            }
            return flat;
        }
    }
    return null;
}
