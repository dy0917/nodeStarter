
import CommentController from '../controller/commentController';
console.log('CommentController', CommentController);
import CommentService from '../Services/comment'
jest.mock('../Services/comment');

describe('should test controller', () => {
  afterEach(() => {
    jest.resetModules();
  });

  test('should test #getPosts - successful', async () => {
    // const posts = [{}, {}];
    const comment={comment:"test11"};
    //  CommentService.newComment=jest.fn().mockReturnValue(comment);
    // CommentService.newComment.mockImplementation(() => Promise.resolve(comment));
    const res = {};
     res.status = jest.fn().mockReturnValue(res);
     res.json = jest.fn().mockReturnValue(res);
  
  const result= await CommentController.newComment(null, res, null);
  console.log('result1', result);
  console.log('result2', result.json());
    expect(result.json().comment).toBe(comment.comment);
    expect(res.status).toBeCalledWith(200);
  });

});