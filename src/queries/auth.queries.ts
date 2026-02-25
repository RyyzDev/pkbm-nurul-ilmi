// ============================================================
// Auth Queries — React Query hooks for authentication
// ============================================================

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { authService } from "@/services/auth.service";
import type { LoginCredentials } from "@/types/models";

/**
 * Fetch current authenticated user
 */
export function useAuth() {
    return useQuery({
        queryKey: queryKeys.auth.me,
        queryFn: () => authService.me(),
        retry: false,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

/**
 * Login mutation
 */
export function useLogin() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
        onSuccess: (data) => {
            // Set token cookie
            document.cookie = `token=${data.data.token}; path=/; max-age=${60 * 60 * 24}`;
            // Invalidate and refetch auth state
            queryClient.invalidateQueries({ queryKey: queryKeys.auth.me });
        },
    });
}

/**
 * Logout mutation
 */
export function useLogout() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            document.cookie = "token=; path=/; max-age=0";
            queryClient.clear();
            window.location.href = "/login";
        },
    });
}
