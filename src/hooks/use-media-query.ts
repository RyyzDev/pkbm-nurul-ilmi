// ============================================================
// useMediaQuery — Responsive breakpoint hook
// ============================================================

"use client";

import { useState, useEffect } from "react";

/**
 * Check if a CSS media query matches.
 * Useful for conditional rendering based on screen size.
 *
 * @example useMediaQuery("(min-width: 768px)")
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);

        const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
}
