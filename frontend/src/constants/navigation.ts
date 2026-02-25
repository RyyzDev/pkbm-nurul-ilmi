// ============================================================
// Navigation Menu Definitions
// ============================================================

import {
    LayoutDashboard,
    GraduationCap,
    Layers,
    FileText,
    Tags,
    ClipboardList,
    Settings,
} from "lucide-react";
import { ROUTES } from "./routes";
import type { NavItem, SidebarMenuItem } from "@/types/common";

/**
 * Public website main navigation
 */
export const PUBLIC_NAV_ITEMS: NavItem[] = [
    { label: "Beranda", href: ROUTES.PUBLIC.HOME },
    { label: "Tentang Kami", href: ROUTES.PUBLIC.ABOUT },
    { label: "Program", href: ROUTES.PUBLIC.PROGRAMS },
    { label: "PPDB", href: ROUTES.PUBLIC.PPDB },
    { label: "Artikel", href: ROUTES.PUBLIC.ARTICLES },
];

/**
 * Admin dashboard sidebar menu
 */
export const ADMIN_SIDEBAR_ITEMS: SidebarMenuItem[] = [
    {
        label: "Dashboard",
        href: ROUTES.ADMIN.DASHBOARD,
        icon: LayoutDashboard,
    },
    {
        label: "Program",
        href: ROUTES.ADMIN.PROGRAMS,
        icon: GraduationCap,
        children: [
            { label: "Semua Program", href: ROUTES.ADMIN.PROGRAMS },
            { label: "Sub Program", href: ROUTES.ADMIN.SUB_PROGRAMS },
        ],
    },
    {
        label: "Artikel",
        href: ROUTES.ADMIN.ARTICLES,
        icon: FileText,
        children: [
            { label: "Semua Artikel", href: ROUTES.ADMIN.ARTICLES },
            { label: "Kategori", href: ROUTES.ADMIN.CATEGORIES },
        ],
    },
    {
        label: "PPDB",
        href: ROUTES.ADMIN.PPDB_SUBMISSIONS,
        icon: ClipboardList,
    },
    {
        label: "Pengaturan",
        href: ROUTES.ADMIN.SETTINGS,
        icon: Settings,
    },
];
