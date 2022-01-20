import Comment from '../Schemas/comment';
export default {
      async newComment (comment:any) {
            const saveComment = await Comment.create(
                comment
            );
            await saveComment.save();
        
            return saveComment;
    }
  };