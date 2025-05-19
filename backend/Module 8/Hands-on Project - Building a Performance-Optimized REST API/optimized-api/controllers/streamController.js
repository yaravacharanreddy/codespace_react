import path from 'path'
import { createReadStream } from 'fs'

export const streamLargeFile = (req, res, next) => {
  const filePath = path.resolve('backend/Module 8/Hands-on Project - Building a Performance-Optimized REST API/optimized-api/data/large-file.txt')

  const readStream = createReadStream(filePath)

  readStream.on('error', (err) => next(err))

  res.setHeader('Content-Type', 'text/plain')

  readStream.pipe(res)
}
