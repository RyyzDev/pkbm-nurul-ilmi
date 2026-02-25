// ============================================================
// useDisclosure — Open/Close state hook
// ============================================================

"use client";

import { useState, useCallback } from "react";

/**
 * Manage boolean open/close state for modals, drawers, dropdowns, etc.
 */
export function useDisclosure(defaultOpen: boolean = false) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    return { isOpen, open, close, toggle } as const;
}
