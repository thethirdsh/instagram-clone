import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const accessTokenCookieDomain = process.env.ACCESS_TOKEN_COOKIE ?? ''

    // Configure the cookie options to match the ones set during login
    const cookieOptions = {
      maxAge: 0, // Set maxAge to 0 to expire the cookie immediately
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      domain: accessTokenCookieDomain || '.localhost', // Match the domain from login
    }

    const response = NextResponse.json(
      { status: 'success', message: 'Logged out successfully' },
      { status: 200 }
    )

    // Clear the cookie by setting maxAge to 0
    response.cookies.set('accessToken', '', cookieOptions)
    response.cookies.set('_vercel_jwt', '', cookieOptions)

    return response
  } catch (error) {
    console.error('Error during logout:', error)
    return NextResponse.json(
      { status: 'failure', error: 'Failed to logout' },
      { status: 500 }
    )
  }
}
