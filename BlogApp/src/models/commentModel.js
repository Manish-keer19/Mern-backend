import mongoose , {Schema} from "mongoose";

const CommentSchema = new Schema(
    {
        post:{
            type:Schema.Types.ObjectId,
            ref:"Post"
        },
        user:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        }
    }
)

export const Comment = mongoose.model("Comment",CommentSchema);
