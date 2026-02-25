import PublicLayout from "@/components/layout/public/public-layout";

export default function PublicRouteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <PublicLayout>{children}</PublicLayout>;
}
