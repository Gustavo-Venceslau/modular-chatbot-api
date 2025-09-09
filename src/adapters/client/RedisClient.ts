import { createClient } from "redis";
import { logger } from "src/utils/logger.ts";

export const redisClient = createClient({
  url: "redis://localhost:6379",
});

redisClient.connect().catch(logger.error);

redisClient.on('error', (err) => {
  logger.error('Error connecting to Redis:', err);
});

redisClient.on('connect', () => {
  logger.info('Redis client successfully connected!');
});