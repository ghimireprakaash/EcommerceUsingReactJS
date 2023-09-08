import express from 'express';
import userRouter from './user';
import catRouter from './category';


const mainRouter = express.Router();
mainRouter.use(express.json());
mainRouter.use(express.urlencoded({extended: false}));

mainRouter.use('/user', userRouter);
mainRouter.use('/category', catRouter);



export default mainRouter;