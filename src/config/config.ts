const MONGO_IP= process.env.MONGO_IP || 'mongo';
const MONGO_PORT=  process.env.MONGO_PORT || 27017;
const MONGO_USER= process.env.MONGO_USER;
const MONGO_PASSWORD= process.env.MONGO_PASSWORD;
const REDIS_URL= process.env.REDIS_URL|| 'redis';
const REDIS_PORT= process.env.REDIS_PORT|| 6379;
const SESSION_SECRET= process.env.SESSION_SECRET||'This is a secret';

//const mongoUrl = `mongodb://dbadmin:Password1@localhost:27018/?authSource=admin`;
export {
    MONGO_IP,
    MONGO_PORT,
    MONGO_USER,
    MONGO_PASSWORD,
    REDIS_URL,
    REDIS_PORT
    //  MONGO_IP: process.env.MONGO_IP || 'testDBAdmin:mongoH8503@cluster0.rqhjt.mongodb.net',
    // MONGO_PORT: process.env.MONGO_PORT || 27017,
    // MONGO_USER: process.env.MONGO_USER,
    // MONGO_PASSWORD: process.env.MONGO_PASSWORD,
}



// mongodb+srv://testDBAdmin:<password>@cluster0.rqhjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority