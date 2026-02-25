// ============================================================
// (admin) Route Group Layout — Admin dashboard shell
// ============================================================

import { AuthProvider } from "@/lib/auth-provider";
import AdminLayout from "@/components/layout/admin/admin-layout";

export default function AdminRouteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <AdminLayout>{children}</AdminLayout>
        </AuthProvider>
    );
}
