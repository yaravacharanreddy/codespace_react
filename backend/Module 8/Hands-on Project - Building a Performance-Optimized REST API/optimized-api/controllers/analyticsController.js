import { redisClient } from '../server.js'
import YourModel from '../models/YourModel.js' // Replace with your actual model

export const getAnalytics = async (req, res, next) => {
  try {
    const cacheKey = 'analytics_data'
    const cached = await redisClient.get(cacheKey)
    if (cached) {
      return res.json(JSON.parse(cached))
    }

    const analyticsData = await YourModel.aggregate([
      // Example aggregation pipeline stages
      { $match: {} },
      { $group: { _id: '$category', total: { $sum: '$value' } } },
    ])

    await redisClient.set(cacheKey, JSON.stringify(analyticsData), { EX: 60 * 5 }) // Cache 5 mins

    res.json(analyticsData)
  } catch (error) {
    next(error)
  }
}
