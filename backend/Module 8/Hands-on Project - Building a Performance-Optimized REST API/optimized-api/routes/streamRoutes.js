import express from 'express'
import { streamLargeFile } from '../controllers/streamController.js'

const router = express.Router()

router.get('/file', streamLargeFile)

export default router
