// ============================================================
// useDebounce — Debounced value hook
// ============================================================

"use client";

import { useState, useEffect } from "react";

/**
 * Debounce a value by the specified delay (ms).
 * Useful for search inputs that trigger API calls.
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}
