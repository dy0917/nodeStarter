import User from '../Schemas/user';
import bcrypt from 'bcryptjs';
export default {
    signUp : async ({ username, password } : { username:string, password:string }) =>{
        const user = User.create({
            username,
            password,
        });
        return user;
    },

    login : async ({ username, password } : { username:string, password:string }) =>{
        const user = await User.findOne({username});
        if(!user) return false;
        const isCorrect = await bcrypt.compare(password, user.password);
        return isCorrect
    },

    find : async () => {
        const user = await User.find()
        return user
    },
    postsById : async (id:string) => {
       const user = await User.findById(id).populate('posts');
       return user;
    }
}