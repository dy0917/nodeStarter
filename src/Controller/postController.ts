import User from '../Schemas/user';
import mongoose from 'mongoose';
import Post from '../Schemas/post';
import { Request, Response } from 'express';

export default {
    create : async (req:Request, res:Response) => {
        
        const user = req.params;
        const id = user.id;
        try{
            const userById = await User.findById(id);
            if(!userById) return res.json({success: false, errors: 'Failed To find User'});
            const { title, subtitle} = req.body;
            const post = await Post.create({
                title,
                subtitle,
                user:id
            });
            await post.save();
    
            userById.posts.push(post);
            await userById.save();
    
            return res.send(userById);
        }catch(e){
            return res.json({success: false, errors: [e]});
        }
      
    },
    userByPost : async (id: mongoose.Schema.Types.ObjectId)=>{
     
        const userByPost = await Post.findById(id).populate('user');
        return userByPost
    }
}