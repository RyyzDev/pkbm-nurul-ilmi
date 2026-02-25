// ============================================================
// EmptyState — Centered message for empty data views
// ============================================================

import { cn } from "@/lib/utils";

export interface EmptyStateProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
    className?: string;
}

export function EmptyState({
    icon,
    title,
    description,
    action,
    className,
}: EmptyStateProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center py-16 text-center",
                className
            )}
        >
            {icon && (
                <div className="mb-4 text-gray-400 [&>svg]:h-12 [&>svg]:w-12">
                    {icon}
                </div>
            )}
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            {description && (
                <p className="mt-2 max-w-sm text-sm text-gray-600">
                    {description}
                </p>
            )}
            {action && <div className="mt-6">{action}</div>}
        </div>
    );
}
