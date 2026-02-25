"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, GraduationCap, Users, Award } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { RevealOnScroll } from "@/lib/motion";

export default function HeroSection() {
    return (
        <RevealOnScroll>
        <section className="relative overflow-hidden pb-10 pt-10 sm:pt-16 lg:pb-12 lg:pt-10">
            <Container>
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* ── Left: Text Content ──────────────────── */}
                    <div className="order-1 lg:order-2">
                        {/* Overline */}
                        <p className="flex items-center gap-3 text-[10px] lg:text-xs font-bold uppercase tracking-[0.1em] text-green-700 sm:text-sm">
                            <span className="block h-5 w-[3px] rounded bg-[var(--color-accent-gold)]" />
                            Pendidikan tanpa batas, Belajar Sepanjang Hayat
                        </p>

                        {/* Heading */}
                        <h1 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                            Membangun Karakter, Mewujudkan Cita-cita Bersama{" "}
                            <span className="relative inline-block text-green-700">
                                PKBM Nurul Ilmi
                                {/* Decorative underline */}
                                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[var(--color-accent-gold)] sm:-bottom-1.5 sm:h-1" />
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-600 sm:mt-6 sm:text-base">
                            Kami menyediakan layanan pendidikan non-formal yang
                            setara, inklusif, dan berlandaskan nilai-nilai
                            Islami. Bergabunglah bersama komunitas pembelajar
                            yang suportif untuk masa depan yang lebih cerah.
                        </p>

                        {/* CTA buttons */}
                        <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                            <Link href="/ppdb">
                                <Button variant="accent" rounded="lg" size="lg">
                                    Daftar Sekarang
                                </Button>
                            </Link>
                            <Link href="/tentang-kami">
                                <Button
                                    variant="secondary"
                                    rounded="lg"
                                    size="lg"
                                >
                                    Pelajari Lebih Lanjut
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* ── Right: Image Composition ─────────────── */}
                    <div className="relative order-2 flex justify-center lg:order-2 lg:justify-end">
                        {/* Decorative blob behind image */}
                        <div className="absolute -right-8 -top-8 h-72 w-72 rounded-full bg-green-100/50 blur-3xl sm:h-96 sm:w-96" />
                        <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full border border-white/40 bg-white/30 border-10 blur-3xl" />

                        {/* Main image card */}
                        <div className="relative z-10 border border-white/40 bg-gray/100 w-full border-20 max-w-md sm:max-w-lg">
                            <div className="overflow-hidden rounded-2xl border border-gray-200/60 shadow-xl sm:rotate-1 sm:rounded-3xl">
                                <Image
                                    src="/images/home/hero.jpg"
                                    alt="Kegiatan PKBM Nurul Ilmi — siswa dan tenaga pendidik"
                                    width={600}
                                    height={460}
                                    className="h-auto w-full object-cover"
                                    priority
                                />
                            </div>

                      {/* Floating social proof badge */}
                        <div className="absolute -bottom-5 left-4 z-20 flex items-center gap-3 rounded-full border border-white/60 bg-white/90 px-4 py-2 shadow-xl backdrop-blur-md sm:-bottom-6 sm:left-6 sm:px-5 sm:py-2.5">

                        {/* Avatar stack */}
                        <div className="flex -space-x-2">
                            <Image
                            src="/images/home/avatar-1.png"
                            alt="Siswa"
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full border-2 border-white object-cover"
                            />
                            <Image
                            src="/images/home/avatar2.png"
                            alt="Siswa"
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full border-2 border-white object-cover"
                            />
                            <Image
                            src="/images/home/avatar3.png"
                            alt="Siswa"
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full border-2 border-white object-cover"
                            />
                        </div>

                        {/* Text */}
                        <p className="text-xs font-semibold text-gray-700 sm:text-sm">
                            Bergabung dengan <span className="font-bold text-gray-900">500+ siswa</span> lainnya
                        </p>
                        </div>
                        </div>
                        </div>

                </div>

                {/* ── Stats Bar ────────────────────────────────── */}
                <div className="relative z-10 mt-14 sm:mt-16 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        {STATS.map((stat) => (
                            <div
                                key={stat.label}
                                className="flex items-center gap-4 px-5 py-5 sm:px-6"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50">
                                    <stat.icon
                                        size={22}
                                        className="text-green-700"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg font-extrabold text-gray-900 sm:text-xl">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs text-gray-500 sm:text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
        </RevealOnScroll>
    );
}

// ── Stats data ─────────────────────────────────────────────
const STATS = [
    {
        icon: GraduationCap,
        value: "15+ Tahun",
        label: "Mengabdi Untuk Negeri",
    },
    {
        icon: Users,
        value: "100+ Alumni",
        label: "Sukses Berkarir & Studi",
    },
    {
        icon: Award,
        value: "Akreditasi B",
        label: "BAN-PAUD & PNF",
    },
] as const;
