import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET(req: NextRequest) {
  try {
    // Retrieve cookies from the request
    const cookies = req.cookies.get('accessToken')
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET!

    if (cookies) {
      const decoded = jwt.verify(cookies.value, secret) as {
        id: string
        username: string
      }
      console.log('Decoded:', decoded)
      return NextResponse.json( decoded, { status: 200 })
    }

    return NextResponse.json(
      { error: 'No cookies/tokens were found' },
      { status: 400 }
    )

    // Return the accessToken
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to fetch token' },
      { status: 500 }
    )
  }
}
