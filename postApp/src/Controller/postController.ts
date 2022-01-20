import User from '../Schemas/user';
import mongoose from 'mongoose';
import Post from '../Schemas/post';
import { Request, Response, NextFunction } from 'express';
import postService from '../Services/post';

export default {
    create : async (req:Request, res:Response, next: NextFunction) => {
        try{
            const post = await postService.newPost(req.body);
            return res.status(200).json(post)
            
            }catch(e){
                return res.json({success: false, errors: [e]});
            }
        // const user = req.params;
        // const id = user.id;
        // try{
        //     const userById = await User.findById(id);
        //     if(!userById) return res.json({success: false, errors: 'Failed To find User'});
        //     const { title, subtitle} = req.body;
        //     const post = await Post.create({
        //         title,
        //         subtitle,
        //         user:id
        //     });
        //     await post.save();
    
        //     userById.posts.push(post);
        //     await userById.save();
    
        //     return res.send(userById);
        // }catch(e){
        //     return res.json({success: false, errors: [e]});
        // }
      
    },
    userByPost : async (id: mongoose.Schema.Types.ObjectId)=>{
     
        const userByPost = await Post.findById(id).populate('user');
        return userByPost
    },

    findAll : async  (req:Request, res:Response, next: NextFunction)=>{
        try{
        const posts = await postService.getAllPosts();
        return res.status(200).json(posts)
        
        }catch(e){
            return res.json({success: false, errors: [e]});
        }
    },

    findById : async  (req:Request, res:Response, next: NextFunction)=>{
        try{
            const posts = await postService.findById(req.params.id);
            return res.status(200).json(posts);
        }catch(e){
            return res.json({success: false, errors: [e]});
        }
    },

}