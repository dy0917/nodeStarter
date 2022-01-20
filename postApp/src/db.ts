import mongoose from 'mongoose';
import {MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT} from './config/config';
const dbStart = ()=>{
  console.log('Starting to connect DB');  
  const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

    mongoose.connect(mongoUrl, {
    }).then(()=>{
      console.log('connected to DB')
    }).catch(e=>{
      console.log(e)
      setTimeout(dbStart, 5000);
    });
}

export {
    dbStart
}