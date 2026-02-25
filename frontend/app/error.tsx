// ============================================================
// Global Error Boundary
// ============================================================

"use client";

import { Button } from "@/components/ui";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                    Terjadi Kesalahan
                </h2>
                <p className="mt-2 text-gray-600">
                    {error.message || "Terjadi kesalahan yang tidak terduga."}
                </p>
                <div className="mt-6">
                    <Button onClick={reset}>
                        Coba Lagi
                    </Button>
                </div>
            </div>
        </div>
    );
}
