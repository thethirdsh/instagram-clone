// // lib/prisma.ts

// import { PrismaClient } from '@prisma/client'

// let prisma: PrismaClient | null = null

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient()
// } else {
//   // In development mode, persist the Prisma client across hot reloads
//   if (!global.prisma) {
//     global.prisma = new PrismaClient()
//   }
//   prisma = global.prisma
// }

// export { prisma }
