// ============================================================
// Admin Topbar
// ============================================================

"use client";

import { Menu, LogOut } from "lucide-react";
import { useLogout } from "@/queries/auth.queries";
import { useAuthContext } from "@/lib/auth-provider";
import { Avatar, Button } from "@/components/ui";

interface TopbarProps {
    onMenuToggle: () => void;
}

export default function Topbar({ onMenuToggle }: TopbarProps) {
    const { user } = useAuthContext();
    const logout = useLogout();

    return (
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
            {/* Left: Menu toggle */}
            <button
                type="button"
                onClick={onMenuToggle}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
                aria-label="Toggle menu"
            >
                <Menu size={20} />
            </button>

            <div className="flex-1" />

            {/* Right: User info + Logout */}
            <div className="flex items-center gap-4">
                {user && (
                    <div className="flex items-center gap-3">
                        <Avatar name={user.name} size="md" />
                        <span className="hidden text-sm font-medium text-gray-700 sm:block">
                            {user.name}
                        </span>
                    </div>
                )}
                <Button
                    variant="destructive"
                    size="sm"
                    leftIcon={<LogOut size={16} />}
                    onClick={() => logout.mutate()}
                    disabled={logout.isPending}
                >
                    <span className="hidden sm:block">Keluar</span>
                </Button>
            </div>
        </header>
    );
}
