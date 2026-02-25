// ============================================================
// Axios API Client — Centralized HTTP instance
// ============================================================

import axios from "axios";

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        Accept: "application/json",
    },
});

// ── Request interceptor (attach auth token) ──────────────────
apiClient.interceptors.request.use((config) => {
    // In browser, read token from cookie (set by login)
    if (typeof window !== "undefined") {
        const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("token="))
            ?.split("=")[1];

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
});

// ── Response interceptor (handle 401 globally) ───────────────
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 && typeof window !== "undefined") {
            // Clear token cookie and redirect to login
            document.cookie = "token=; path=/; max-age=0";
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);
