import mongoose, { Schema } from "mongoose";

const Postshcema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  Comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

export const Post = mongoose.model("Post", Postshcema);
