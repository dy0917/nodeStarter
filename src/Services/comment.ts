import Comment from '../Schemas/comment';
export default {

      async create (comment:any) {
            const saveComment = await Comment.create(
                comment
            );
            await saveComment.save();
        
            return saveComment;
    }
  };