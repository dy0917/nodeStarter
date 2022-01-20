import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from "./Routes";
const {MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = require("./config/config")

// middlewares
export default function(database:any) {
const app: Application = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


const port = process.env.PORT || 3000

app.use(routes(database));

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})
return app;
}
