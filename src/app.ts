import express, { Application, Request, Response } from 'express';
const session = require('express-session');
import re from './ts/index';
const RedisStore = require('connect-redis')(session);

import cors from 'cors';
import bodyParser from 'body-parser';
import routes from "./Routes";
import {dbStart} from "./db"
import {initRedisClient} from "./redis"


const redisClient = initRedisClient();

const app: Application = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: "this is a srecect",
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 30000
    },
    resave: false,
    saveUninitialized: true,
}));
dbStart();

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });



const port = process.env.PORT || 3000

app.use(routes({}));

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})

