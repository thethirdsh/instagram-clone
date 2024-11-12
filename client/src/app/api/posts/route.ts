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

export const POST = async (request: Request) => {
  try {
    const { userId, caption } = await request.json()

    // Basic validation
    if (!userId) {
      return NextResponse.json(
        { error: 'An error occured' },
        { status: 400 }
      )
    }

    const newPost = await prisma.post.create({ data: { userId, caption } })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}

export const PUT = async (request: Request) => {
  try {
    const { id, caption } = await request.json()
    const updatedPost = await prisma.post.update({ where: { id }, data: { caption }})

    return NextResponse.json(updatedPost, { status: 200 })

  } catch (error) {
    console.error('Error updating post', error)
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}

export const DELETE = async (request: Request) => {
  try {
    const { id } = await request.json()
    await prisma.post.delete({ where: { id } })

    return NextResponse.json({message: 'Post deleted successfully'}, { status: 204})
  } catch (error) {
    console.error('Error deleting post', error)
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  } 
}