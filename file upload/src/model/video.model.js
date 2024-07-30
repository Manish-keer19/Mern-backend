import mongoose ,{Schema} from "mongoose";

const videoShchema= new Schema(
    {
    name:{
        type:String,
        required:true
    },
    videoUlr:{
        type:String,
        required:true
    },
    tags:{
       type:String
    },
    email:{
        type:String,

    }
    },{
        timestamps:true,
    }
)

export const Video = mongoose.model("Video",videoShchema)