import { Post } from "../models/PostModel.js";

export const creatPost = async (req, res) => {
  try {
    // fetch the data from req.body:
    const { title, description } = req.body;

    const newPost = new Post({
      title,
      description,
    });

    const savedPost = await newPost.save();

    res.json({
      data: savedPost,
    });
  } catch (error) {
    res.json({
      message: "server error could not create post",
      error: error,
    });
  }
};

export const getAllposts = async (req,res)=>{
 
  try {
    
   const data =await Post.find()

   res.json({
    res:data
   })
    
  } catch (error) {
    res.json({
      message:"could not get the posts "
    })
    
  }

    
}