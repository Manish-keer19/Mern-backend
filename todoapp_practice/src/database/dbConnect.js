import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

 async function  connectDb(){

    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("database connect succefully");
    } catch (error) {
        console.log("could'n connect to db eror : ",error);
        process.exit(1);
    }
  
}

export default connectDb