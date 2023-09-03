import express from 'express';
import userRouter from './user'; 


const mainRouter = express.Router();
mainRouter.use(express.json());
mainRouter.use(express.urlencoded({extended: false}));

mainRouter.use('/user', userRouter);


export default mainRouter;