import { Router, Request, Response } from "express";
import Post from '../Controller/postController'
const router = Router();

router.get('/post',Post.findAll);
// user routes
router.post('/post', Post.create);
router.get('/post/:id', Post.findById);


export default router;
