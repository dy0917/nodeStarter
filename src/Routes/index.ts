import { Router, Request, Response } from "express";
import person from "./person";


export default function(a:string) {
//   const token = new TokenHelper(env.jwtKey);
  const router = Router();
//   router.get("/", async (req: Request, res: Response) => {
//     // var silence = new user({ username: "anyother save" });
//     // await silence.save();
//     const users = await user.find({});
//     res.send(users);
//   });

//   router.use("/token", tokenRoute(token));
//   router.get("/test", test.getTest);
//   router.use("/api", token.checkToken(), person);
  router.use("/person", person);
//   router.use("/testTracker", testTracker);
  return router;
}
