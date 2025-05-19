import { redisClient } from '../server.js'

export const getCache = async (key) => {
  return await redisClient.get(key)
}

export const setCache = async (key, value, expireSeconds = 300) => {
  await redisClient.set(key, JSON.stringify(value), { EX: expireSeconds })
}
