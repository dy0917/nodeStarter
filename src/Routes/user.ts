import { Router, Request, Response } from "express";
import User from '../Controller/userController'
const router = Router();

router.get('/user',(req:Request,res:Response)=>res.send('ok'));
// user routes
router.post('/user/signUp', User.signUp);
router.post('/user/login', User.login);
 router.post('/user/find',User.find);
// router.post('/user/find/post/:id', User.postsByUser);

export default router;
