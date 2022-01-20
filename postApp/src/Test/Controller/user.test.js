const mockingoose = require('mockingoose');
import userController from '../../Controller/userController';
import userService from '../../Services/user';
import {mockResponse, mockRequest, mockNext } from '../../Utils/mockTools'
jest.mock('../../Services/user');

describe('User controller test', () => {

  describe('signup user', () => {
      it ('should signup user', async () => {
        const user = {  
            username: "name",
            password:"this.is a password",
          };
        userService.signUp = jest.fn().mockReturnValue(Promise.resolve(user));
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        const req = {
          body:{
            username: "name",
            password: "bio",

          }
        };
        req.params = jest.fn().mockReturnValue(req);
        await userController.signUp(req, res, null);
 
        expect(res.json).toBeCalledWith(user);
        expect(res.status).toBeCalledWith(200);
    })
    
  });
  describe('login', () => {
    it ('should login', async () => {

      userService.login = jest.fn().mockReturnValue(Promise.resolve(true));
      const res = mockResponse();
      
      const req = {
        body:{
          username: "name",
          password: "bio",

        }
      };
      req.params = jest.fn().mockReturnValue(req);
      await userController.login(req, res, null);

      expect(res.json).toBeCalledWith({status:'success'});
      expect(res.status).toBeCalledWith(200);
  })
  it ('should not login', async () => {
    userService.login = jest.fn().mockReturnValue(Promise.resolve(false));
    const res = mockResponse();
    
    const req = {
      body:{
        username: "name",
        password: "bio",

      }
    };
    req.params = jest.fn().mockReturnValue(req);
    await userController.login(req, res, null);
    expect(res.json).toBeCalledWith({
      status:'fail',
      message:'incorrect username or password'
    });
    expect(res.status).toBeCalledWith(400);
  })
  });
});