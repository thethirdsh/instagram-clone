import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl
    const accessToken = request.cookies.get('accessToken')?.value

    const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET
    if (!JWT_SECRET) {
      console.error('JWT_SECRET is not defined in the environment variables')
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // If no token and trying to access a protected route
    const publicPaths = ['/login', '/signup']
    if (!accessToken && !publicPaths.includes(pathname)) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // If token exists and accessing public routes
    if (accessToken && publicPaths.includes(pathname)) {
      const decoded = jwt.verify(accessToken, JWT_SECRET) as jwt.JwtPayload

      // Optionally validate token expiration
      if (decoded && decoded.exp && decoded.exp * 1000 < Date.now()) {
        return NextResponse.redirect(new URL('/login', request.url))
      }

      return NextResponse.redirect(new URL('/homepage', request.url))
    }

    // Allow the request to proceed for all other cases
    return NextResponse.next()
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

// Matcher for protected and public routes
export const config = {
  matcher: [
    '/',
    '/homepage',
    '/login',
    '/signup',
    '/forgot-password',
    '/forgot-password/reset-password',
    '/reels',
    '/explore',
    '/profile',
  ],
}
