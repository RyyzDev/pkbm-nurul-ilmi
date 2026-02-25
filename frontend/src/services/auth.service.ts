// ============================================================
// Auth Service — Login, Logout, Session
// ============================================================

import { apiClient, API_ENDPOINTS } from "./api";
import type { ApiResponse } from "@/types/api";
import type { AuthResponse, LoginCredentials, User } from "@/types/models";

export const authService = {
    /**
     * Login with email & password
     */
    login: async (credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> => {
        const { data } = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
        return data;
    },

    /**
     * Logout current session
     */
    logout: async (): Promise<ApiResponse<null>> => {
        const { data } = await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
        return data;
    },

    /**
     * Get current authenticated user
     */
    me: async (): Promise<ApiResponse<User>> => {
        const { data } = await apiClient.get(API_ENDPOINTS.AUTH.ME);
        return data;
    },
};
