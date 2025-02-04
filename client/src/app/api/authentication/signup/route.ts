import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client' // Ensure you're importing the Prisma client

const prisma = new PrismaClient() // Initialize the Prisma client

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const {
      name,
      username,
      email,
      password,
    }: { name: string; username: string; email: string; password: string } =
      await req.json()

    // Validate input
    if (!name || !username || !email || !password) {
      return NextResponse.json(
        { message: 'failure', error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if the user already exists by username or email
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username }, // Check if username already exists
          { email }, // Check if email already exists
        ],
      },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'failure', error: 'Username or email already exists' },
        { status: 400 }
      )
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create the new user
    const user = await prisma.user.create({
      data: {
        name,
        username,
        email, // Include email in the user creation
        password: hashedPassword,
      },
    })

    // Generate a JWT token
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

    // Set the token as a cookie
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
      { status: 201 }
    )

    response.cookies.set('accessToken', token, cookieOptions)
    // response.cookies.set('_vercel_jwt', token, cookieOptions)

    return response
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: 'failure', error: error.message },
        { status: 500 }
      )
    }
    return NextResponse.json(
      { status: 'failure', error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
