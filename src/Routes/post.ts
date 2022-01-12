import { Router, Request, Response } from "express";
import Post from '../Controller/postController'
const router = Router();

router.get('/post',(req:Request,res:Response)=>res.send('ok'));
// user routes
router.post('/post/create/:id', Post.create);
router.post('/post/populate/:id',Post.userByPost);

export default router;
