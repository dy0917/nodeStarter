import { Router, Request, Response } from "express";
import controller from "../Controller/controller";

const router = Router();

export default (db:any) => {
    const router = Router();
   
router.get('/controller', controller.getPosts);

}