import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const accessTokenCookieDomain = process.env.ACCESS_TOKEN_COOKIE ?? ''
    const { username, password } = await req.json()

    // Check if required fields are provided
    if (!username || !password) {
      return NextResponse.json(
        { status: 'failure', error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Find the user by username
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    })

    // Check if user exists
    if (!user) {
      return NextResponse.json(
        { status: 'failure', error: 'User not found' },
        { status: 400 }
      )
    }

    // Check if password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return NextResponse.json(
        { status: 'failure', error: 'Invalid password' },
        { status: 400 }
      )
    }

    // Create JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    })

    // Set the JWT token as a HttpOnly cookie
    const cookieOptions = {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      domain: accessTokenCookieDomain || '.localhost', // Customize for your domain
    }

    const response = NextResponse.json(
      { status: 'success', token, data: { ...user, password: undefined } },
      { status: 200 }
    )

    // Set the cookie in response headers
    response.cookies.set('accessToken', token, cookieOptions)

    return response
  } catch (error) {
    console.error('Error logging in:', error)
    return NextResponse.json(
      { status: 'failure', error: 'Failed to login' },
      { status: 500 }
    )
  }
}