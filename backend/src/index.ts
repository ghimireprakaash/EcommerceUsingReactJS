import express, { Application, Request, Response} from "express";
import dotenv from 'dotenv';

let app: Application = express();

dotenv.config();

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello');
});

// let port:number = parseInt(process.env.PORT!) || 3000;
const port:any = process.env.PORT || 3000;
const server_url:any = process.env.HOST || 'localhost';


app.listen(port, ()=>{
    console.log(`Server running on https://${server_url}:${port}`);
})