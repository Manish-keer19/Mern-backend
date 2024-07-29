import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config();

const connectDb = async()=>{

    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("database connction succefully");
    })
    .catch((error)=>{
        console.log("could not connect to db");
        console.log(error.message);
    })
}

export default connectDb