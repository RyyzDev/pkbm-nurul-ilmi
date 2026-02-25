// ============================================================
// Custom 404 Page
// ============================================================

import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="text-center">
                <p className="text-7xl font-extrabold text-green-700">404</p>
                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                    Halaman Tidak Ditemukan
                </h2>
                <p className="mt-2 text-gray-600">
                    Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
                </p>
                <div className="mt-6">
                    <Link href="/">
                        <Button>Kembali ke Beranda</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
