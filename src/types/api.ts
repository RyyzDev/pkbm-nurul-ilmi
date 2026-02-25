// ============================================================
// API Response & Request Generic Types
// ============================================================

/**
 * Standard API response wrapper from Laravel backend
 */
export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

/**
 * Paginated response from Laravel (using laravel pagination)
 */
export interface PaginatedResponse<T> {
    success: boolean;
    message: string;
    data: T[];
    meta: PaginationMeta;
}

export interface PaginationMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
}

/**
 * Standard API error shape
 */
export interface ApiError {
    success: false;
    message: string;
    errors?: Record<string, string[]>;
    status?: number;
}

/**
 * Query params for list endpoints
 */
export interface ListQueryParams {
    page?: number;
    per_page?: number;
    search?: string;
    sort_by?: string;
    sort_order?: "asc" | "desc";
}
