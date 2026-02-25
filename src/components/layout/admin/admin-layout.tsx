// ============================================================
// Admin Layout — Sidebar + Topbar shell
// ============================================================

"use client";

import Sidebar from "./sidebar";
import Topbar from "./topbar";
import { useState } from "react";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Topbar onMenuToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
            </div>
        </div>
    );
}
