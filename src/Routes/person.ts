import { Router, Request, Response } from "express";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("asdfasdf");
});

router.post("/", (req: Request, res: Response) => {
  res.send(req);
});

export default router;
