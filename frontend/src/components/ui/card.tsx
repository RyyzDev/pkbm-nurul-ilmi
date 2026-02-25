// ============================================================
// Card — Brand-compliant card container component
// ============================================================

import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    padding?: "none" | "sm" | "md" | "lg";
    elevated?: boolean;
}

const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

export function Card({
    className,
    padding = "md",
    elevated = false,
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                "rounded-lg border border-gray-200 bg-white",
                paddingStyles[padding],
                elevated && "rounded-xl shadow-sm",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

// ── Sub-components ─────────────────────────────────────────

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> { }

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
    return (
        <div
            className={cn("border-b border-gray-200 px-6 py-4", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> { }

export function CardBody({ className, children, ...props }: CardBodyProps) {
    return (
        <div className={cn("px-6 py-4", className)} {...props}>
            {children}
        </div>
    );
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> { }

export function CardFooter({ className, children, ...props }: CardFooterProps) {
    return (
        <div
            className={cn(
                "border-t border-gray-200 px-6 py-4",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
