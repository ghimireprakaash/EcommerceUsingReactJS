import express from 'express';
import UserController from './../controllers/User/UserController';

let userRouter = express.Router();

let userInstance = new UserController();

userRouter.get('/', userInstance.index);
userRouter.post('/', userInstance.create);


export default userRouter;
