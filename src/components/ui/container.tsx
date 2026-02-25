// ============================================================
// Container — Brand-compliant layout container
// ============================================================
// Standard max-width + responsive padding pattern
// ============================================================

import { cn } from "@/lib/utils";

const maxWidthStyles = {
    sm: "max-w-sm",
    md: "max-w-2xl",
    default: "max-w-4xl",
    lg: "max-w-7xl",
    full: "max-w-full",
} as const;

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: keyof typeof maxWidthStyles;
    noPadding?: boolean;
    as?: "div" | "section" | "article" | "main";
}

export function Container({
    maxWidth = "lg",
    noPadding = false,
    as: Component = "div",
    className,
    children,
    ...props
}: ContainerProps) {
    return (
        <Component
            className={cn(
                "mx-auto",
                maxWidthStyles[maxWidth],
                !noPadding && "px-4 sm:px-6 lg:px-8",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
