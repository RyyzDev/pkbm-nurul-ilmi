// ============================================================
// General Utility Functions
// ============================================================

import { clsx, type ClassValue } from "clsx";

/**
 * Merge class names conditionally (clsx wrapper)
 */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

/**
 * Format date to Indonesian locale
 */
export function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        ...options,
    });
}

/**
 * Format date to relative time (e.g., "2 hari yang lalu")
 */
export function formatRelativeDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Hari ini";
    if (diffDays === 1) return "Kemarin";
    if (diffDays < 7) return `${diffDays} hari yang lalu`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu yang lalu`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} bulan yang lalu`;
    return `${Math.floor(diffDays / 365)} tahun yang lalu`;
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trimEnd() + "…";
}

/**
 * Generate initials from full name (for avatar fallback)
 */
export function getInitials(name: string): string {
    return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

/**
 * Format number with Indonesian locale (e.g., 1.234.567)
 */
export function formatNumber(num: number): string {
    return num.toLocaleString("id-ID");
}

/**
 * Delay execution (for optimistic UI, etc.)
 */
export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
