import User from '../Services/user';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

export default {
    signUp : async (req:Request,res:Response)=>{
        try{
            const { username, password } = req.body;
            const hashPassword = await bcrypt.hash(password, 12);
            const newUser = await User.signUp({username, password: hashPassword});
            res.status(200).json(newUser);
        }catch(e){
            return res.json({success: false, errors: [e]});
        }
    },

    login : async (req:Request,res:Response)=>{
        try{
            const { username, password } = req.body;
            const isCorrect = await User.login({username, password});
            if(isCorrect){
                res.status(200).json({
                    status:'success'
                });
            }else{
                res.status(400).json({
                    status:'fail',
                    message:'incorrect username or password'
                });  
            }
           
        }catch(e){
            return res.json({success: false, errors: [e]});
        }
      
    },

    find : async (req:Request,res:Response)=>{
        const { name, bio, website } = req.body;
        if(!name) return res.status(400);
        const user = await User.find();
        console.log('user',user);
         return res.status(200).json(user);
    },



}