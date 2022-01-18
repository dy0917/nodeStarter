
import CommentController from '../../controller/commentController';
import commentService from '../../Services/comment';
jest.mock('../../Services/comment');

describe('should test controller', () => {
  afterEach(() => {
    jest.resetModules();
  });

  test('should test #getPosts - successful', async () => {

    const comment={comment:"comment1"};
    commentService.newComment.mockImplementation(() => Promise.resolve(comment));
    const res = {};
     res.status = jest.fn().mockReturnValue(res);
     res.json = jest.fn().mockReturnValue(res);

     const req = {comment};
     req.body = jest.fn().mockReturnValue(req);
  
    await CommentController.newComment(req, res, null);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith(comment);
  });

});