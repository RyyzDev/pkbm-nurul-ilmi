// ============================================================
// Accordion — Brand-compliant collapsible content sections
// ============================================================

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Single Accordion Item ──────────────────────────────────

export interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
}

export function AccordionItem({
    title,
    children,
    defaultOpen = false,
    className,
}: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div
            className={cn("border-b border-gray-200 last:border-b-0", className)}
        >
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-gray-900 transition-colors hover:text-green-700"
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <ChevronDown
                    size={16}
                    className={cn(
                        "shrink-0 text-gray-400 transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
            {isOpen && (
                <div className="pb-4 text-sm text-gray-600">{children}</div>
            )}
        </div>
    );
}

// ── Accordion Group ────────────────────────────────────────

export interface AccordionProps {
    children: React.ReactNode;
    className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
    return (
        <div
            className={cn(
                "rounded-lg border border-gray-200 bg-white px-4",
                className
            )}
        >
            {children}
        </div>
    );
}
