import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (id) {
      const post = await prisma.post.findUnique({ where: { id } })

      if (!post)
        return NextResponse.json({ message: 'Post not found' }, { status: 404 })

      return NextResponse.json(post)
    } else {
      const posts = await prisma.post.findMany({
        include: {
          user: {
            select: {
              username: true,
            },
          },
        },
      })

      if (posts.length === 0)
        return NextResponse.json({ message: 'No posts found' }, { status: 404 })

      return NextResponse.json(posts)
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
