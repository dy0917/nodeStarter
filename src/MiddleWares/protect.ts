import { Request, Response, NextFunction } from 'express';
//error controller function

export default async (req:Request, res: Response, next: NextFunction)=>{
    const user = req.session.user;
    if(user){
        await req.session.touch();
        req.user = user;
        next();
    }else{
        return res.status(401).json({success: false, errors: 'Unaothorized'});
    }
}