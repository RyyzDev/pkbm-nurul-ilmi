import Link from "next/link";
import Image from "next/image";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Youtube,
    Award,
    ExternalLink,
    Music2,
} from "lucide-react";

const TENTANG_LINKS = [
    { label: "Profil Lembaga", href: "/tentang-kami" },
    { label: "Visi & Misi", href: "/tentang-kami#visi-misi" },
    { label: "Tenaga Pendidik", href: "/tentang-kami#tenaga-pendidik" },
    { label: "Prestasi", href: "/tentang-kami#prestasi" },
];

const AKADEMIK_LINKS = [
    { label: "Paket A (Setara SD)", href: "/program" },
    { label: "Paket B (Setara SMP)", href: "/program" },
    { label: "Paket C (Setara SMA)", href: "/program" },
    { label: "Life Skills", href: "/program" },
];

const SOCIAL_LINKS = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100010629913049", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/pkbmnurulilmi", label: "Instagram" },
    { icon: Music2, href: "https://www.tiktok.com/@pkbmnurulilmi?is_from_webapp=1&sender_device=pc", label: "Tiktok" },
    { icon: Youtube, href: "https://www.youtube.com/@pkbmnurulilmi", label: "YouTube" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="pt-10">
            <footer className="relative overflow-hidden rounded-t-[36px] border border-white/5 bg-gradient-to-br from-[#0B3A1D] via-[#0F4724] to-[#144D29] shadow-2xl">

                {/* content */}
                <div className="mx-auto max-w-7xl pl-8 pr-10 py-16 sm:pl-12 sm:pr-6 lg:pl-16 lg:pr-8">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.6fr] lg:gap-x-0 lg:gap-y-8">

                        {/* COL 1 */}
                        <div className="lg:pr-10">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/logo-nurulilmi.png"
                                    alt="Logo PKBM Nurul Ilmi"
                                    width={48}
                                    height={48}
                                    className="h-12 w-12 object-contain"
                                />
                                <div>
                                    <p className="text-lg font-bold text-white">PKBM Nurul Ilmi</p>
                                    <p className="text-[10px] font-semibold uppercase tracking-widest text-green-300">
                                        Pusat Kegiatan Belajar Masyarakat
                                    </p>
                                </div>
                            </div>

                            <p className="mt-5 w-full text-sm leading-relaxed text-green-100/80">
                                Membangun generasi cerdas, berakhlak mulia, dan mandiri. Kami berkomitmen menyediakan pendidikan kesetaraan yang inklusif sebagai jembatan masa depan yang lebih cerah bagi setiap peserta didik.   
                            </p>

                            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
                                <Award size={18} className="text-yellow-400" />
                                <div>
                                    <p className="text-xs font-bold text-white">Terakreditasi B</p>
                                    <p className="text-[10px] text-green-200/70">Badan Akreditasi Nasional</p>
                                </div>
                            </div>
                        </div>

                        {/* COL 2 + 3 */}
                        {[
                            { title: "Tentang", links: TENTANG_LINKS },
                            { title: "Akademik", links: AKADEMIK_LINKS },
                        ].map((col) => (
                            <div key={col.title} className="lg:pl-16">
                                <h4 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                                    <span className="h-4 w-[3px] rounded bg-green-500" />
                                    {col.title}
                                </h4>

                                <ul className="space-y-3">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center gap-2 text-sm text-green-100/70 transition hover:text-white"
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-green-400 transition group-hover:scale-125" />
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* COL 4 */}
                        <div className="lg:pl-8">
                            <h4 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                                <span className="h-4 w-[3px] rounded bg-green-400" />
                                Hubungi Kami
                            </h4>

                            <div className="space-y-3">
                                <div className="flex items-start gap-2.5">
                                    <MapPin className="mt-0.5 shrink-0 h-4 w-4 text-green-400" />
                                    <p className="text-sm text-green-100/70">
                                        Jl. Raya Pulau Cangkir, Kronjo, Kec. Kronjo, Kabupaten Tangerang, Banten 15550
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-x-4 gap-y-2">
                                    <a className="flex items-center gap-2 text-sm text-green-100/70 hover:text-white">
                                        <Phone size={14} className="text-green-400" />
                                        +62 858-6170-8209
                                    </a>

                                    <a className="flex items-center gap-2 text-sm text-green-100/70 hover:text-white">
                                        <Mail size={14} className="text-green-400" />
                                        pkbmnurulilmi@gmail.com
                                    </a>
                                </div>

                               <a
                                href="https://maps.app.goo.gl/NiuXkma3EUEFeunN6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative mt-2 block overflow-hidden rounded-xl border border-white/10 shadow-lg"
                                >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.5624477794427!2d106.42374037462594!3d-6.054600193931186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x2e41f9594452be25%3A0xec90cfb499e8c1ad!2sPKBM%20NURUL%20ILMI!5e0!3m2!1sid!2sid!4v1772017307177!5m2!1sid!2sid"
                                    className="h-40 w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />

                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                    <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-medium shadow-md transition group-hover:scale-105">
                                    <ExternalLink size={12} />
                                    Lihat Peta
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom */}
                <div className="border-t border-green-500/20">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-6 sm:flex-row sm:justify-between">

                    {/* left */}
                    <p className="text-xs text-green-100/50 text-center sm:text-left">
                        © {currentYear} PKBM Nurul Ilmi. All rights reserved.
                        <span className="mx-1">•</span>
                        Developed by{" "}
                        <a
                            href="https://godinov.my.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-green-200 underline hover:text-white transition"
                        >
                            Godinov ID
                        </a>
                    </p>

                {/* center */}
                <div className="flex items-center gap-4">
                    {SOCIAL_LINKS.map((social) => (
                        <a 
                        key={social.label} 
                        href={social.href}
                        target="_blank"
                        className="text-green-100/50 hover:text-white">
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>

                {/* right */}
                <div className="flex gap-4 text-xs text-green-100/50">
                    <Link href="/kebijakan-privasi" className="hover:text-white">
                        Kebijakan Privasi
                    </Link>
                    <Link href="/syarat-ketentuan" className="hover:text-white">
                                Syarat & Ketentuan
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}