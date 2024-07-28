import mongoose ,{Schema} from "mongoose";

const TodoShcema = new Schema (
    {
        title :{
            type:String,
            required:true,
        },
        decsription:{
           type:String,
           required:true
        },
       createdAt:{
        type:Date,
        default:Date.now()
       }    ,
       updatedAt:{
        type:Date,
        default:Date.now()
       }    

    },

  
)

export const User = mongoose.model("User",TodoShcema);