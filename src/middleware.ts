import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth/tokens";

const PUBLIC_PATHS = new Set(["/login", "/signup"]);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const userId = await verifySessionToken(token);

  if (PUBLIC_PATHS.has(pathname)) {
    if (userId) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  if (!userId) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  // Skip static assets, API routes, and any file with an extension.
  matcher: ["/((?!_next|api|icons|manifest\\.webmanifest|.*\\..*).*)"],
};
