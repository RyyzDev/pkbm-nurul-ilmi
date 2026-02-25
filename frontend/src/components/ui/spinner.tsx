// ============================================================
// Spinner — Brand-compliant loading spinner
// ============================================================

import { cn } from "@/lib/utils";
import type { SizeVariant } from "@/types/common";

const sizeStyles: Record<SizeVariant, string> = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-4",
    lg: "h-12 w-12 border-4",
};

export interface SpinnerProps {
    size?: SizeVariant;
    label?: string;
    className?: string;
}

export function Spinner({
    size = "md",
    label = "Memuat...",
    className,
}: SpinnerProps) {
    return (
        <div className={cn("flex flex-col items-center gap-3", className)}>
            <div
                className={cn(
                    "animate-spin rounded-full border-green-200 border-t-green-700",
                    sizeStyles[size]
                )}
                role="status"
                aria-label={label}
            />
            {label && <p className="text-sm text-gray-500">{label}</p>}
        </div>
    );
}

/**
 * Full-page centered spinner (for page-level loading states)
 */
export function PageSpinner({ label }: { label?: string }) {
    return (
        <div className="flex min-h-[50vh] items-center justify-center">
            <Spinner size="md" label={label} />
        </div>
    );
}
