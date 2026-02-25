// ============================================================
// Route Protection Middleware
// ============================================================

import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all admin routes
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Redirect authenticated users away from login
  if (pathname === "/login") {
    const token = request.cookies.get("token");
    if (token) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
