// ============================================================
// FloatingWhatsApp — Fixed WhatsApp CTA button
// ============================================================
// Positioned fixed bottom-right as per brand guideline
// ============================================================

"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FloatingWhatsAppProps {
    phoneNumber: string;
    message?: string;
    className?: string;
}

export function FloatingWhatsApp({
    phoneNumber,
    message = "Halo, saya ingin bertanya tentang PKBM Nurul Ilmi",
    className,
}: FloatingWhatsAppProps) {
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "fixed bottom-6 right-6 z-50",
                "flex h-14 w-14 items-center justify-center rounded-full",
                "bg-green-500 text-white shadow-lg",
                "transition-all hover:bg-green-600 hover:shadow-xl",
                "animate-bounce-subtle",
                className
            )}
            aria-label="Hubungi kami via WhatsApp"
        >
            <MessageCircle size={24} />
        </a>
    );
}
