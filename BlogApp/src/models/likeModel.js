import mongoose, { Schema } from "mongoose";

const Likeschema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
   user:{
    type:String,
    required:true
   }
});
export const Like = mongoose.model("Like",Likeschema);

