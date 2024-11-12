import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            username: true,
          },
        },
      },
    });

    if (posts.length === 0)
      return NextResponse.json({ message: 'No posts found' }, { status: 404 })

    return NextResponse.json(posts)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export const POST = async (request: Request) => {
  try {
    const { username, password } = await request.json()

    // Basic validation
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    const newUser = await prisma.user.create({ data: { username, password } })

    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}
