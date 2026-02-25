"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PUBLIC_NAV_ITEMS } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // auto close mobile menu when resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // scroll lock when mobile menu open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    }, [isMobileMenuOpen]);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 sm:gap-3">
                    <Image
                        src="/logo-nurulilmi.png"
                        alt="Logo PKBM Nurul Ilmi"
                        width={44}
                        height={44}
                        className="h-9 w-9 object-contain sm:h-10 sm:w-10 lg:h-11 lg:w-11"
                        priority
                    />
                    <div className="hidden min-[320px]:block">
                        <p className="text-sm font-bold leading-tight text-primary sm:text-base">
                            PKBM Nurul Ilmi
                        </p>
                        <p className="text-[9px] font-semibold uppercase tracking-wider text-secondary sm:text-[10px]">
                            Pusat Kegiatan Belajar Masyarakat
                        </p>
                    </div>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden items-center gap-1 lg:flex">
                    {PUBLIC_NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-green-800",
                                    pathname === item.href
                                        ? "text-green-800"
                                        : "text-secondary"
                                )}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <Link href={ROUTES.PUBLIC.PPDB} className="hidden sm:block">
                        <Button variant="primary" size="md" className="rounded-full">
                            Daftar Sekarang
                        </Button>
                    </Link>

                    <Button
                        variant="ghost"
                        size="md"
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={cn(
                    "lg:hidden overflow-hidden border-t border-gray-200 bg-white transition-all duration-300",
                    isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <ul className="space-y-1 px-4 py-3">
                    {PUBLIC_NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-green-700",
                                    pathname === item.href
                                        ? "text-green-700"
                                        : "text-gray-600"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}

                    <li className="pt-2 sm:hidden">
                        <Link href={ROUTES.PUBLIC.PPDB} onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="primary" fullWidth className="rounded-full">
                                Daftar Sekarang
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}