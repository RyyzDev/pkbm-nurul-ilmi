// ============================================================
// Auth Provider — Authentication Context
// ============================================================

"use client";

import { createContext, useContext } from "react";
import { useAuth } from "@/queries/auth.queries";
import type { User } from "@/types/models";

interface AuthContextValue {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextValue>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { data, isLoading } = useAuth();

    const value: AuthContextValue = {
        user: data?.data ?? null,
        isLoading,
        isAuthenticated: !!data?.data,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
}
