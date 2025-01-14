import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    // Retrieve cookies from the request
    const cookies = req.cookies.get('accessToken')

    if (!cookies) {
      return NextResponse.json(
        { error: 'Access token not found' },
        { status: 401 }
      )
    }

    // Return the accessToken
    return NextResponse.json({ accessToken: cookies }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to fetch token' },
      { status: 500 }
    )
  }
}