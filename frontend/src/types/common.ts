// ============================================================
// Shared Utility Types
// ============================================================

/**
 * Generic select option for dropdowns and selects
 */
export interface SelectOption<T = string> {
    label: string;
    value: T;
}

/**
 * Breadcrumb navigation item
 */
export interface BreadcrumbItem {
    label: string;
    href?: string;
}

/**
 * Navigation menu item
 */
export interface NavItem {
    label: string;
    href: string;
    icon?: string;
    children?: NavItem[];
    badge?: string;
}

/**
 * Admin sidebar menu item
 */
export interface SidebarMenuItem {
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: number;
    children?: Omit<SidebarMenuItem, "icon" | "children">[];
}

/**
 * Generic data table column definition
 */
export interface TableColumn<T> {
    key: keyof T | string;
    label: string;
    sortable?: boolean;
    className?: string;
    render?: (value: unknown, row: T) => React.ReactNode;
}

/**
 * Status badge variant mapping
 */
export type StatusVariant = "success" | "warning" | "danger" | "info" | "default";

/**
 * Component size variants (design system)
 */
export type SizeVariant = "sm" | "md" | "lg";
