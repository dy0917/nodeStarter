const redis = require('redis');
import {REDIS_URL, REDIS_PORT} from './config/config';
console.log(REDIS_URL, REDIS_PORT);
const initRedisClient = ()=>{
  const redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
  });
  redisClient.on('error', (e:any) => {
    console.log('Error ' + e);
  });
  return redisClient;
}

export {
  initRedisClient
}