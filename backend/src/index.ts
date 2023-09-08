import express, { Application, Request, Response} from "express";
import dotenv from 'dotenv';
import db_connect from "./config/database";
import mainRouter from "./router";


let app: Application = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(mainRouter);

dotenv.config();

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello');
});



/*=======================Database Connection=======================*/

try {
    db_connect.then(()=>{
        console.log("Connection to the Database Successful");
    }).catch((err)=>{
        console.log(err);
    });
} catch (error) {
    console.log(error);
}

/*=======================Database Connection=======================*/


// let port:number = parseInt(process.env.PORT!) || 3000;
const port:any = process.env.PORT || 3000;
const server_url:any = process.env.HOST || 'localhost';


app.listen(port, ()=>{
    console.log(`Server running on https://${server_url}:${port}`);
})