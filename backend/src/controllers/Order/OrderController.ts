import { Request, Response } from "express";
import JsonDataResponse from "../../lib/JsonDataResponse";
import Order from "../../models/Order";

export default class OrderController{
    async index(req: Request, res: Response){
        try {
            let orderData = await Order.find({...req.body});
            return res.send(JsonDataResponse(orderData, 200, "Order List"));
        } catch (error) {
            return res.send(JsonDataResponse(error, 500, ""));
        }
    }

    async create(req: Request, res: Response){
        
    }

    async update(req: Request, res: Response){
        
    }

    async delete(req: Request, res: Response){
        
    }
}