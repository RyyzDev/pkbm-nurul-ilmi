import type { Metadata } from "next";

export const DEFAULT_SEO: Metadata = {
    title: {
        default: "PKBM Nurul Ilmi",
        template: "%s | PKBM Nurul Ilmi",
    },
    description:
        "PKBM Nurul Ilmi — Pusat Kegiatan Belajar Masyarakat yang menyediakan pendidikan kesetaraan Paket A, B, dan C serta program keterampilan untuk masyarakat.",
    keywords: [
        "PKBM",
        "Nurul Ilmi",
        "Pendidikan Kesetaraan",
        "Paket A",
        "Paket B",
        "Paket C",
        "Belajar Masyarakat",
    ],
    authors: [{ name: "PKBM Nurul Ilmi" }],
    openGraph: {
        type: "website",
        locale: "id_ID",
        siteName: "PKBM Nurul Ilmi",
    },
    robots: {
        index: true,
        follow: true,
    },
};

/**
 * Per-page SEO overrides — used by the SEO head component
 */
export const PAGE_SEO = {
    HOME: {
        title: "Beranda",
        description:
            "Selamat datang di PKBM Nurul Ilmi — Pusat Kegiatan Belajar Masyarakat.",
    },
    ABOUT: {
        title: "Tentang Kami",
        description:
            "Kenali visi, misi, dan sejarah PKBM Nurul Ilmi dalam memajukan pendidikan masyarakat.",
    },
    PROGRAMS: {
        title: "Program",
        description:
            "Program pendidikan kesetaraan dan keterampilan yang tersedia di PKBM Nurul Ilmi.",
    },
    PPDB: {
        title: "PPDB",
        description:
            "Informasi dan pendaftaran Penerimaan Peserta Didik Baru PKBM Nurul Ilmi.",
    },
    ARTICLES: {
        title: "Artikel",
        description:
            "Berita, artikel, dan informasi terbaru dari PKBM Nurul Ilmi.",
    },
} as const;
