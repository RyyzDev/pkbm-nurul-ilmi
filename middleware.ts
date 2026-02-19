import { NextResponse } from "next/server";

export function middleware(req:any) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const token = req.cookies.get("token");
    if (!token) return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}
