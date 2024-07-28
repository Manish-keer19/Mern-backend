import mongoose from "mongoose";
import dotenv from 'dotenv';
import { log } from "console";

dotenv.config();

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL);
    console.log("database connected succefully");
        
    } catch (error) {
        console.log("couldn't connect to database error :",error)
    }
}

export default connectDb