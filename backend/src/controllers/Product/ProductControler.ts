import { Request, Response } from "express";
import Product from "../../models/Product";
import JsonDataResponse from "../../lib/JsonDataResponse";


export default class ProductController{
    async index(req: Request, res: Response){
        try {
            let product = await Product.find({...req.body});
            res.json(JsonDataResponse(product, 200, "Product List"));
        } catch (error) {
            return res.json(JsonDataResponse(error, 500, ""));
        }
    }

    async create(req: Request, res: Response){
        try {
            let product = new Product({...req.body});
            product = await product.save();
            
            return res.send(product);
        } catch (error) {
            console.log(error);
        }
    }

    async update(req: Request, res: Response){

    }

    async delete(req: Request, res: Response){

    }

    async deleteProductWithId(req: Request, res: Response){
        
    }
}