import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRODUCTION_DOMAIN = "surfdigitalth.com";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (
    !host.includes(PRODUCTION_DOMAIN) &&
    !host.includes("localhost") &&
    !host.includes("127.0.0.1")
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = PRODUCTION_DOMAIN;
    url.port = "";
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js)).*)",
  ],
};
