import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async () => {
  try {
    const users = await prisma.user.findMany()

    if (users.length === 0)
      return NextResponse.json({ message: 'No users found' }, { status: 404 })

    return NextResponse.json(users)
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
