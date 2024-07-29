import mongoose,{Schema} from "mongoose";

const Usershema = new Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            enum:["Admin","Student","Visitor"],
        }

    }
)

export const User = mongoose.model("User",Usershema);