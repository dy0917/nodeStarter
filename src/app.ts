import express, { Application, Request, Response } from 'express'
import routes from "./Routes";

const app: Application = express()
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

const port: number = 3001

app.use(routes(''));
// app.get('/toto', (req: Request, res: Response) => {
//     res.send('Hello toto')
// })

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})
