// ============================================================
// Admin Sidebar
// ============================================================

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ADMIN_SIDEBAR_ITEMS } from "@/constants/navigation";
import { cn } from "@/lib/utils";

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
    const pathname = usePathname();
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleExpand = (label: string) => {
        setExpandedItems((prev) =>
            prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
        );
    };

    return (
        <aside
            className={cn(
                "flex flex-col border-r border-gray-200 bg-white transition-all duration-300",
                isCollapsed ? "w-16" : "w-64"
            )}
        >
            {/* Header */}
            <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
                {!isCollapsed && (
                    <span className="text-sm font-bold text-green-700">Admin Panel</span>
                )}
                <button
                    type="button"
                    onClick={onToggle}
                    className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100"
                    aria-label="Toggle sidebar"
                >
                    <ChevronLeft
                        size={18}
                        className={cn("transition-transform", isCollapsed && "rotate-180")}
                    />
                </button>
            </div>

            {/* Menu items */}
            <nav className="flex-1 space-y-1 overflow-y-auto p-3">
                {ADMIN_SIDEBAR_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                        pathname === item.href ||
                        item.children?.some((child) => pathname === child.href);
                    const isExpanded = expandedItems.includes(item.label);
                    const hasChildren = item.children && item.children.length > 0;

                    return (
                        <div key={item.label}>
                            {hasChildren ? (
                                <button
                                    type="button"
                                    onClick={() => toggleExpand(item.label)}
                                    className={cn(
                                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-green-50 text-green-700"
                                            : "text-gray-600 hover:bg-gray-50"
                                    )}
                                >
                                    <Icon className="h-5 w-5 shrink-0" />
                                    {!isCollapsed && (
                                        <>
                                            <span className="flex-1 text-left">{item.label}</span>
                                            {isExpanded ? (
                                                <ChevronDown size={16} />
                                            ) : (
                                                <ChevronRight size={16} />
                                            )}
                                        </>
                                    )}
                                </button>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-green-50 text-green-700"
                                            : "text-gray-600 hover:bg-gray-50"
                                    )}
                                >
                                    <Icon className="h-5 w-5 shrink-0" />
                                    {!isCollapsed && <span>{item.label}</span>}
                                    {!isCollapsed && item.badge !== undefined && (
                                        <span className="ml-auto rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            )}

                            {/* Children */}
                            {hasChildren && isExpanded && !isCollapsed && (
                                <div className="ml-8 mt-1 space-y-1">
                                    {item.children!.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className={cn(
                                                "block rounded-lg px-3 py-2 text-sm transition-colors",
                                                pathname === child.href
                                                    ? "font-medium text-green-700"
                                                    : "text-gray-500 hover:text-gray-700"
                                            )}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}
