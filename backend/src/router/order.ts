import express from 'express';
import OrderController from '../controllers/Order/OrderController';

let orderRouter = express.Router();
let orderInstance = new OrderController();

orderRouter.get('/', orderInstance.index);
// orderRouter.post('/', orderInstance.create);


export default orderRouter;