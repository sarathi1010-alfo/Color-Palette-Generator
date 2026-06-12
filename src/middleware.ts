import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const isVercelDomain = hostname.includes('vercel.app');

  // Force HTTPS for non-localhost
  const protocol = request.headers.get('x-forwarded-proto') || 'http';
  if (protocol === 'http' && !hostname.includes('localhost') && process.env.NODE_ENV === 'production') {
    return NextResponse.redirect(`https://${hostname}${request.nextUrl.pathname}${request.nextUrl.search}`, 301);
  }

  const response = NextResponse.next();

  if (isVercelDomain) {
    // Add noindex header for vercel.app domains to prevent duplicate content indexing
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
