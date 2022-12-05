import { NextRequest, NextResponse } from 'next/server';

export function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith('/auth/login')) {
        if (req.cookies.get('user_token') !== undefined) {
            return NextResponse.redirect(new URL('/', req.url));
        }
    }

    if (req.nextUrl.pathname.startsWith('/booking')) {
        if (req.cookies.get('user_token') === undefined) {
            return NextResponse.redirect(new URL('/auth/login', req.url));
        }
    }
}
