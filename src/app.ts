import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from "./Routes";
const {MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = require("./config/config")

// middlewares

const app: Application = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
// mongodb+srv://testDBAdmin:<password>@cluster0.rqhjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb+srv://testDBAdmin:<password>@cluster0.rqhjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// const mongoUrl = `mongodb+srv://testAdmin:HI8LIbq63Kx0A75h@cluster0.rqhjt.mongodb.net/sample_mflix?retryWrites=true&w=majority`;
const mongoUrl =`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;
mongoose.connect(mongoUrl, {
}).then(()=>{
  console.log('connected to DB')
}).catch(e=>{
  console.log(e)
});

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });



const port = process.env.PORT || 3000

const r={
  test:"111111"
}

app.use(routes(r));

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})
