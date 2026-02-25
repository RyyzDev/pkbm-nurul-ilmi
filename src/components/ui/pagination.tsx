// ============================================================
// Pagination — Brand-compliant pagination component
// ============================================================

"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    className,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const getVisiblePages = (): (number | "ellipsis")[] => {
        const pages: (number | "ellipsis")[] = [];
        const delta = 1;

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - delta && i <= currentPage + delta)
            ) {
                pages.push(i);
            } else if (pages[pages.length - 1] !== "ellipsis") {
                pages.push("ellipsis");
            }
        }

        return pages;
    };

    return (
        <nav
            aria-label="Pagination"
            className={cn("flex items-center justify-center gap-1", className)}
        >
            {/* Previous */}
            <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="inline-flex items-center justify-center rounded-lg p-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Halaman sebelumnya"
            >
                <ChevronLeft size={16} />
            </button>

            {/* Page numbers */}
            {getVisiblePages().map((page, idx) =>
                page === "ellipsis" ? (
                    <span
                        key={`ellipsis-${idx}`}
                        className="px-2 text-sm text-gray-400"
                    >
                        …
                    </span>
                ) : (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        className={cn(
                            "inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors",
                            page === currentPage
                                ? "bg-green-700 text-white"
                                : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                        )}
                        aria-current={page === currentPage ? "page" : undefined}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Next */}
            <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="inline-flex items-center justify-center rounded-lg p-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Halaman berikutnya"
            >
                <ChevronRight size={16} />
            </button>
        </nav>
    );
}
