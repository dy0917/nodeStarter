const redis = require('redis');
import {REDIS_URL, REDIS_PORT} from './config/config';
const initRedisClient = ()=>{
  return redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
  });
}

export {
  initRedisClient
}