// ============================================================
// Avatar — Brand-compliant avatar component
// ============================================================
// Used in admin topbar for user initials display
// ============================================================

import { cn } from "@/lib/utils";
import { getInitials } from "@/lib/utils";
import type { SizeVariant } from "@/types/common";

const sizeStyles: Record<SizeVariant, string> = {
    sm: "h-6 w-6 text-[10px]",
    md: "h-8 w-8 text-xs",
    lg: "h-10 w-10 text-sm",
};

export interface AvatarProps {
    name: string;
    src?: string | null;
    size?: SizeVariant;
    className?: string;
}

export function Avatar({ name, src, size = "md", className }: AvatarProps) {
    if (src) {
        return (
            <img
                src={src}
                alt={name}
                className={cn(
                    "rounded-full object-cover",
                    sizeStyles[size],
                    className
                )}
            />
        );
    }

    return (
        <div
            className={cn(
                "flex items-center justify-center rounded-full bg-green-100 font-semibold text-green-700",
                sizeStyles[size],
                className
            )}
            aria-label={name}
        >
            {getInitials(name)}
        </div>
    );
}
