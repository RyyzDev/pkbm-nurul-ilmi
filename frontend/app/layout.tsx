// ============================================================
// Root Layout — HTML shell + global providers
// ============================================================

import type { Metadata } from "next";
import { Nunito, Open_Sans } from "next/font/google";
import { Toaster } from "sonner";
import QueryProvider from "@/lib/query-provider";
import { DEFAULT_SEO } from "@/constants/seo";
import "./globals.css";

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["700", "800"],
    display: "swap",
    variable: "--font-nunito",
});

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: "swap",
    variable: "--font-open-sans",
});

export const metadata: Metadata = DEFAULT_SEO;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id" className={`${nunito.variable} ${openSans.variable}`}>
            <body className="antialiased">
                <QueryProvider>
                    {children}
                    <Toaster position="top-right" richColors closeButton />
                </QueryProvider>
            </body>
        </html>
    );
}
