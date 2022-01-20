import { Router, Request, Response } from "express";
import CommentContoller from '../Controller/commentController';

const router = Router();

router.get('/comment',(req:Request,res:Response)=>res.send('ok'));
// user routes
router.post('/comment/create/:id', CommentContoller.newComment);

export default router;

