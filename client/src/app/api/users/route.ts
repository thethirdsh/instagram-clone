import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const username = searchParams.get('username')

    if (id) {
      const user = await prisma.user.findUnique({ where: { id } })

      if (!user)
        return NextResponse.json({ message: 'User not found' }, { status: 404 })

      return NextResponse.json(user)
    } else if (username) {
      const user = await prisma.user.findFirst({
        where: { username },
        include: { posts: true },
      })

      if (!user)
        return NextResponse.json({ message: 'User not found' }, { status: 404 })

      return NextResponse.json(user)
    } else {
      const users = await prisma.user.findMany()
      if (users.length === 0 || !users)
        return NextResponse.json({ message: 'No users found' }, { status: 404 })

      return NextResponse.json(users)
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

export const POST = async (request: Request) => {
  try {
    const { username, name, password } = await request.json()

    // Basic validation
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    const newUser = await prisma.user.create({
      data: { username, name, password },
    })

    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}

export const PUT = async (request: Request) => {
  try {
    const { id, ...data } = await request.json()

    if (!id)
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )

    const updatedUser = await prisma.user.update({ where: { id }, data })

    return NextResponse.json(updatedUser, { status: 200 })
  } catch (error) {
    console.error('Error updating user', error)
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    )
  }
}

export const DELETE = async (request: Request) => {
  try {
    const { id } = await request.json()
    await prisma.user.delete({ where: { id } })

    return NextResponse.json(
      { message: 'User deleted successfully' },
      { status: 204 }
    )
  } catch (error) {
    console.error('Error deleting user', error)
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    )
  }
}
