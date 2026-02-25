// ============================================================
// User & Auth Domain Models
// ============================================================

export interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
    avatar: string | null;
    created_at: string;
    updated_at: string;
}

export type UserRole = "admin" | "editor";

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}
