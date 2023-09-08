import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const db_url:string = process.env.DB_URL || 'mongodb://127.0.0.1:27017/ecommerce_db';
const db_connect = mongoose.connect(db_url);

export default db_connect;