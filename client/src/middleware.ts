import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
// import jwt from 'jsonwebtoken'

// interface JwtPayload {
//   id: string
//   username: string
//   name: string
//   profileImage: string
//   iat: number
//   exp: number
// }

export function middleware(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname

    const accessToken = request.cookies.get('accessToken')
    const productionCookies = request.cookies.get('_vercel_jwt')

    if (
      !accessToken &&
      !productionCookies &&
      path !== '/login' &&
      path !== '/signup'
    ) {
      return NextResponse.redirect(new URL('/login', request.url))
    } else if (accessToken && (path === '/login' || path === '/signup'))
      return NextResponse.redirect(new URL('/homepage', request.url))

    // const decoded = accessToken
    //   ? (jwt.decode(accessToken.value) as JwtPayload)
    //   : null

    // const decodedRefreshToken = refreshToken
    //   ? (jwt.decode(refreshToken.value) as JwtPayload)
    //   : null
    // var role = decodedAccessToken ? decodedAccessToken.role : null
    // if (!role) {
    //   role = decodedRefreshToken ? decodedRefreshToken.role : null
    // }

    // if (role && role === UserRole.USER && path !== '/home') {
    //   return NextResponse.redirect(new URL('/home', request.url))
    // }
    // if (
    //   role &&
    //   role === UserRole.CURATOR &&
    //   path !== '/news-curator/rss-feeds'
    // ) {
    //   return NextResponse.redirect(
    //     new URL('/news-curator/rss-feeds', request.url)
    //   )
    // }
    // if (role && role === UserRole.ADMIN && path !== '/admin') {
    //   return NextResponse.redirect(new URL('/admin', request.url))
    // }

    return NextResponse.next()
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// Matcher to include all routes except API and static files
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
    '/profile', // Exclude API routes and static files
  ],
}
