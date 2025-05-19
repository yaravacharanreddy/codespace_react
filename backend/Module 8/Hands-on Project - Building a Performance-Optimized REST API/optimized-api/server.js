import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import analyticsRoutes from './routes/analyticsRoutes.js'
import streamRoutes from './routes/streamRoutes.js'
import { createClient } from 'redis'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

await connectDB()

const redisClient = createClient({ url: process.env.REDIS_URL })
redisClient.on('error', (err) => console.error('Redis Client Error', err))
await redisClient.connect()

app.use(express.json())

app.use('/api/analytics', analyticsRoutes)
app.use('/api/stream', streamRoutes)

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export { redisClient }
