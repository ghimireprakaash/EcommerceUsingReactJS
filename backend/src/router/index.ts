import express from 'express';
import userRouter from './user';
import catRouter from './category';
import prodRouter from './product';
import orderRouter from './order';


const mainRouter = express.Router();
mainRouter.use(express.json());
mainRouter.use(express.urlencoded({extended: false}));

mainRouter.use('/user', userRouter);
mainRouter.use('/category', catRouter);
mainRouter.use('/product', prodRouter);
mainRouter.use('/order', orderRouter);


export default mainRouter;