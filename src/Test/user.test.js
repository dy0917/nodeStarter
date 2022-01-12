const mockingoose = require('mockingoose');
import userSchema from '../Schemas/user';
import userController from '../Controller/userController'
import userService from '../Services/user'
jest.mock('../Services/user');

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockRequest = () => {
  const req = {};
  req.params = jest.fn().mockReturnValue(req);
  return req;
};

const mockNext = () => {
  return jest.fn();
};

  describe('Books service', () => {

    describe('fetchBooks', () => {
      it ('should return the list of books', async () => {
        const posts = [
          {
            name: 'Book 1',
            bio: 2021,
            website: 'test.site one',
            posts:[]
          },
          {
            name: 'Book 2',
            bio: 2022,
            website: 'test.site two',
            posts:[]
          }
        ]
         userService.find.mockImplementation(()=>Promise.resolve(posts)
        );
        const res = mockResponse();
        const req = mockRequest();
        req.body = {name:"11"};
        await userController.find(req, res, null);
        expect(res.json).toBeCalledWith(posts);
      });

      it ('should fail', async () => {
        const posts = [
          {
            name: 'Book 1',
            bio: 2021,
            website: 'test.site one',
            posts:[]
          },
          {
            name: 'Book 2',
            bio: 2022,
            website: 'test.site two',
            posts:[]
          }
        ]
         userService.find.mockImplementation(()=>Promise.resolve(posts)
        );
        const req = mockRequest();
        req.body={};
        const res = mockResponse();
        const next = mockNext();
        await userController.find(req,res, next);

        expect(res.status).toBeCalledWith(400);
      });
    });


    


    describe('create user', () => {
      it ('should create user', async () => {
        const user = {  
            name: "name",
            bio:"bio",
            website:"website"
          };
        userService.create = jest.fn().mockReturnValue(Promise.resolve(user));
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        const req = {
          body:{
            name: "name",
            bio:"bio",
            website:"website"
          }
        };
        req.params = jest.fn().mockReturnValue(req);
        await userController.create(req, res, null);
 
        expect(res.json).toBeCalledWith(user);
    })
  });
  });