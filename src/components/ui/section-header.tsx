// ============================================================
// SectionHeader — Page & section title pattern
// ============================================================
// Standard heading pattern used across all public content pages
// ============================================================

import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
    title: string;
    description?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeader({
    title,
    description,
    centered = false,
    className,
}: SectionHeaderProps) {
    return (
        <div className={cn(centered && "text-center", className)}>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            {description && (
                <p
                    className={cn(
                        "mt-4 text-gray-600",
                        centered && "mx-auto max-w-2xl"
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
