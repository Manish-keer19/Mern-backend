import mongoose , {Schema} from "mongoose";

const todoschema = new Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        }
    },{timestamps:true}
)

export const Todo = mongoose.model('User',todoschema);