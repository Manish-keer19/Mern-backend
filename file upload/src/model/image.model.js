import mongoose, { Schema } from "mongoose";
import { sendEmail } from "../config/sendEmail.js";

const imageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: { // Fixed typo from imageUlr to imageUrl
      type: String,
      required: true,
    },
    tags: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Post-save hook
imageSchema.post("save",async function(doc){
    // console.log("Post-save hook triggered");
  // console.log("Document saved:", doc);
  try {
   const result = await sendEmail(doc)
   console.log('"email send',result);
  
  } catch (error) {
    console.log(error);
  }

});

export const Image = mongoose.model("Image", imageSchema);
