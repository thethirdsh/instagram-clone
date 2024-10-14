import express from 'express'
// import { PrismaClient } from '@prisma/client'

const app = express()
// const prisma = new PrismaClient()

app.use(express.json())

// Example route
// app.get('/users', async (req, res) => {
//   const users = await prisma.user.findMany()
//   res.json(users)
// })

app.get('/', async (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'Server is up and running!' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
