import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
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
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.NEXT_PUBLIC_JWT_SECRET as string,
      {
        expiresIn: process.env.NEXT_PUBLIC_JWT_EXPIRES_IN,
      }
    )

    const domain =
      process.env.NEXT_PUBLIC_NODE_ENV === 'production'
        ? '.instagram-clone-jade-five.vercel.app'
        : 'localhost'

    // Set the JWT token as a HttpOnly cookie
    const cookieOptions = {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
      sameSite: 'strict' as const,
      domain,
      path: '/',
    }

    const response = NextResponse.json(
      { status: 'success', token, data: { ...user, password: undefined } },
      { status: 200 }
    )

    // Set the cookie in response headers
    response.cookies.set('accessToken', token, cookieOptions)
    // response.cookies.set('_vercel_jwt', token, cookieOptions)

    return response
  } catch (error) {
    console.error('Error logging in:', error)
    return NextResponse.json(
      { status: 'failure', error: 'Failed to login' },
      { status: 500 }
    )
  }
}
