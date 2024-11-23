import { NextRequest } from 'next/server'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const isAuthenticated = async (req: NextRequest) => {
  console.log('Checking authentication...');
  // Get token from cookies
  const token = req.cookies.get('accessToken')?.value // Access the value of the cookie

  if (!token) {
    throw new Error(
      'Unauthorized, You are not logged in! Please log in to get access.'
    )
  }

  // Verify the token
  let decoded: JwtPayload
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload
  } catch (error) {
    console.error(error)
    throw new Error('Invalid or expired token')
  }

  // Check if user exists
  const currentUser = await prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  })

  if (!currentUser) {
    throw new Error('The user belonging to this token does no longer exist.')
  }

  // Check if password was recently changed
  if (currentUser.passwordChangedAt) {
    const passwordChangedAt = Math.floor(
      currentUser.passwordChangedAt.getTime() / 1000
    )
    if (passwordChangedAt > decoded.iat!) {
      throw new Error('User recently changed password! Please log in again.')
    }
  }

  return currentUser
}
