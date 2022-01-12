import User from '../Services/user';
import mongoose from 'mongoose';
import Post from '../Schemas/post';
import { Request, Response } from 'express';

export default {
    create : async (req:Request,res:Response)=>{
            const { name, bio, website } = req.body;
            const newUser = await User.create(name, bio, website);
            res.status(200).json(newUser);
      
    },
    find : async (req:Request,res:Response)=>{
        const { name, bio, website } = req.body;
        if(!name) return res.status(400);
        const user = await User.find();
        console.log('user',user);
         return res.status(200).json(user);
    },



}