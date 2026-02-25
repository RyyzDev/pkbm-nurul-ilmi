// ============================================================
// Breadcrumb — Admin navigation breadcrumb
// ============================================================

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/types/common";

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1 text-sm text-gray-500">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={item.label} className="flex items-center gap-1">
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="transition-colors hover:text-green-700"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={isLast ? "font-medium text-gray-900" : ""}>
                                    {item.label}
                                </span>
                            )}
                            {!isLast && <ChevronRight size={14} className="text-gray-400" />}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
