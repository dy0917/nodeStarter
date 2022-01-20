// export default class PostService {
//     constructor(public schema:any){
//     this.schema = schema;
// }
//     async findById (id:any) {
//             const findById = await this.schema.findById(id);
//             return findById;
//     }
// }

import Post from '../Schemas/post';
export default {
      async newPost (post: any) {
            const savedPost = await Post.create(
                post
            );
            return savedPost;
    },
    async getAllPosts (){
        const posts = await Post.find();
        return posts;
    },
    async findById (id:string){
        const post = await Post.findById(id);
        return post;
    }
  };