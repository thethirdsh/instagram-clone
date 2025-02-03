import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const userId = searchParams.get('userId')
    const followerId = searchParams.get('followerId')
    const followingId = searchParams.get('followingId')

    if (!id && !userId && !followerId && !followingId) {
      const userFollows = await prisma.userFollow.findMany()

      if (userFollows.length == 0)
        return NextResponse.json(
          { message: 'No user follows found' },
          { status: 404 }
        )

      return NextResponse.json(
        { message: 'User follows retrieved successfully', data: userFollows },
        { status: 200 }
      )
    }

    if (id && !userId && !followerId && !followingId) {
      const userFollow = await prisma.userFollow.findUnique({ where: { id } })
      if (!userFollow)
        return NextResponse.json(
          { message: 'User follow not found' },
          { status: 404 }
        )

      return NextResponse.json(
        { message: 'User follow retrieved successfully', data: userFollow },
        { status: 200 }
      )
    }

    if (userId && !id && !followerId && !followingId) {
      const userFollows = await prisma.userFollow.findMany({
        where: { followerId: userId },
      })

      if (userFollows.length == 0)
        return NextResponse.json(
          { message: 'No user follows found' },
          { status: 404 }
        )

      return NextResponse.json(userFollows)
    }

    if (followerId && followingId && !id && !userId) {
      const userFollow = await prisma.userFollow.findFirst({
        where: { followerId, followingId },
      })

      if (!userFollow)
        return NextResponse.json(
          { message: 'User follow not found' },
          { status: 404 }
        )

      return NextResponse.json(
        { message: 'User follow retrieved successfully', data: userFollow },
        { status: 200 }
      )
    }
  } catch (error) {
    console.error('Error fetching user follows:', error)
  }
}

export const POST = async (req: Request) => {
  try {
    const { followerId, followingId } = await req.json()

    if (!followerId || !followingId)
      return NextResponse.json({ message: 'Invalid IDs' }, { status: 400 })

    const existingFollow = await prisma.userFollow.findFirst({
      where: { followerId, followingId },
    })

    if (existingFollow) {
      return NextResponse.json(
        { message: 'User is already following this account' },
        { status: 409 } // 409 Conflict
      )
    }

    const userFollow = await prisma.userFollow.create({
      data: { followerId, followingId },
    })

    if (!userFollow)
      return NextResponse.json(
        { message: 'Error creating user follow' },
        { status: 500 }
      )

    return NextResponse.json(
      { message: 'User follow created successfully', data: userFollow },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating user follow: ', error)
  }
}

export const DELETE = async (req: Request) => {
  try {
    const { id } = await req.json()

    if (!id)
      return NextResponse.json({ message: 'Invalid ID' }, { status: 400 })

    const userFollow = await prisma.userFollow.delete({ where: id })

    if (!userFollow)
      return NextResponse.json(
        { message: 'Error deleting user follow' },
        { status: 500 }
      )

    return NextResponse.json(
      { message: 'User follow deleted successfully', data: userFollow },
      { status: 204 }
    )
  } catch (error) {
    console.error('Error deleting user follow:', error)
  }
}
