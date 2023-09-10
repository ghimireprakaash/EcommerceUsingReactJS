import express from 'express';
import ProductController from '../controllers/Product/ProductControler';

let prodRouter = express.Router();
let productInstance = new ProductController();

prodRouter.get('/', productInstance.index);
prodRouter.post('/', productInstance.create);

export default prodRouter;