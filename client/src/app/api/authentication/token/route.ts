import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    // Retrieve cookies from the request
    const cookies = req.cookies.get('accessToken')
    const productionCookies = req.cookies.get('_vercel_jwt')

    if (!cookies && !productionCookies) {
      return NextResponse.json(
        { error: 'Access token not found' },
        { status: 401 }
      )
    }

    // Return the accessToken
    return NextResponse.json(
      { accessToken: cookies, _vercel_jwt: productionCookies },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to fetch token' },
      { status: 500 }
    )
  }
}
