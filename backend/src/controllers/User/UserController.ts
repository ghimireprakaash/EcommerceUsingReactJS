import { Request, Response } from "express";
import User from "../../models/User";
import JsonDataResponse from "../../lib/JsonDataResponse";


export default class UserController{
    async index(req: Request, res: Response){
        const users = await User.find({});
        res.json(JsonDataResponse(users, 200, "User List"));
    }

    async create(req: Request, res: Response){
        try {
            let user = new User({...req.body});
            await user.save();

            res.json(JsonDataResponse(user, 200, 'User Created!!!'));
                        
        } catch (error) {
            return res.json(JsonDataResponse(error, 200, " "));
        }
    }

    async update(req: Request, res: Response){

    }

    async delete(req: Request, res: Response){

    }
}