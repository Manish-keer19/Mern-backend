import { Post } from "../models/PostModel.js";
import { Comment } from "../models/commentModel.js";

const CreateComment = async (req, res) => {
  try {
    // fetch the data from request body
    const { post, user, description } = req.body;
    console.log('post :',post)
    console.log('user :',user)
    console.log('description :',description)
    //   create comment object
    const newComment = new Comment({
      post,
      description,
      user,
    });
    //   save the new comment object into the database:
    const savedComment = await newComment.save();

    //   find the post id , add the new comment to post's comment array :
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: {
          Comment: savedComment._id,
        },
      },
      { new: true }
    )
      .populate("Comment")
      .exec();
    res.status(200).json({
      message: "comment created succefully",
      response: updatedPost,
    });
  } catch (error) {
    res.status(200).json({
      message: "comment couldn't create ",
      response: "internal server error",
    });
  }
};

export default CreateComment;
