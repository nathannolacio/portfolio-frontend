import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { SESSION_COOKIE_NAME, verifySessionToken } from "./lib/auth/session";

const intlMiddleware = createMiddleware(routing);

export default async function proxy(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/admin")) {
        if (request.nextUrl.pathname === "/admin/login") {
            return NextResponse.next();
        }

        const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
        const isValid = token ? await verifySessionToken(token) : false;

        if (!isValid) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }

        return NextResponse.next();
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"]
};