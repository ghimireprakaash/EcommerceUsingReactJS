import { Request, Response } from "express";
import Category from "../../models/Category";

export default class CategoryController{
    async index(req: Request, res: Response){
        try {
            let catData = await Category.find({});
            return res.send(catData);

        } catch (error) {
            console.log(error);
        }
    }

    async create(req: Request, res: Response){
        try {
            let catData = new Category({...req.body});
            catData = await catData.save();

            return res.send(catData);
        } catch (error) {
            console.log(error);
        }
    }
} 