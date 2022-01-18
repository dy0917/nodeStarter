import { Router, Request, Response } from "express";
import user from "./user";
import post from "./post";
import comment from "./comment";

export default (db:any) => {
//   const token = new TokenHelper(env.jwtKey);
  const router = Router();
  router.get('/',(req, res)=>{
    res.send("<h2>Hello world!!s</h2>");
  });
  router.use(user);
  router.use(post);
  router.use(comment);

  return router;
}
