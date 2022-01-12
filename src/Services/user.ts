import User from '../Schemas/user';
export default {
    create : async ( name: string, bio: string, website:string) =>{
        const user = await User.create({
            name,
            bio,
            website
        })

        return user;
    },

    find : async () => {
        const user = await User.find()
        return user
    },
    postsByUser : async (id:string) => {
       const user = await User.findById(id).populate('posts');
       return user;
    }
}