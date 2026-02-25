// ============================================================
// Badge — Brand-compliant status badge component
// ============================================================
// Maps to StatusVariant type from types/common.ts
// ============================================================

import { cn } from "@/lib/utils";
import type { StatusVariant, SizeVariant } from "@/types/common";

// ── Variant styles (locked to brand palette) ───────────────
const variantStyles: Record<StatusVariant, string> = {
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-700",
    info: "bg-sky-100 text-sky-700",
    default: "bg-gray-100 text-gray-700",
};

// ── Size styles ────────────────────────────────────────────
const sizeStyles: Record<SizeVariant, string> = {
    sm: "px-1.5 py-0.5 text-[10px]",
    md: "px-2 py-0.5 text-xs",
    lg: "px-2.5 py-1 text-xs",
};

export interface BadgeProps {
    variant?: StatusVariant;
    size?: SizeVariant;
    children: React.ReactNode;
    className?: string;
}

export function Badge({
    variant = "default",
    size = "md",
    children,
    className,
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full font-semibold leading-none",
                variantStyles[variant],
                sizeStyles[size],
                className
            )}
        >
            {children}
        </span>
    );
}
