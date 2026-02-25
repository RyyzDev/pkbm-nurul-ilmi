// ============================================================
// (auth) Route Group Layout — Minimal auth shell
// ============================================================

export default function AuthRouteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            {children}
        </div>
    );
}
