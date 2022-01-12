
import { Request, Response } from 'express';
import Service from '../Services/service';
import CommentSchema from '../Schemas/comment';

const service = new Service(CommentSchema);

export default {
  getPosts(req:Request, res:Response, next:Function) {
    const {personType} =req.body;
    return service.list();
  }
};


