import commentService from '../Services/comment';
import { Request, Response,NextFunction } from "express";

export default{
    async newComment(req:Request, res:Response, next:NextFunction){
        try {
            // return res.status(200).json({"message": "not working"});
            const newComment = req.body.comment;
            var comment = await commentService.newComment({comment: newComment})
            return res.status(200).json(comment);
        } catch (e:any) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }
}
