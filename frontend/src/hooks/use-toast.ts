// ============================================================
// useToast — Toast notification hook (using Sonner)
// ============================================================

"use client";

import { toast } from "sonner";
import { getErrorMessage } from "@/lib/error-handler";

/**
 * Convenient wrapper around Sonner toast with preset styles.
 */
export function useToast() {
    return {
        success: (message: string) => toast.success(message),
        error: (error: unknown) => toast.error(getErrorMessage(error)),
        info: (message: string) => toast.info(message),
        warning: (message: string) => toast.warning(message),
        loading: (message: string) => toast.loading(message),
        dismiss: (id?: string | number) => toast.dismiss(id),
        promise: toast.promise,
    } as const;
}
