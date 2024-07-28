import { Like } from "../models/likeModel.js";
import { Post } from "../models/PostModel.js";

export const createLike = async (req, res) => {
  try {
    const { post, user } = req.body;

    const newLike = new Like({
      post,
      user,
    });

    const savedlike = await newLike.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedlike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();
    res.json({
      data: updatedPost,
    });
  } catch (error) {
    console.log("can't create like error :", error);
    res.json({
      message: "server error could not create Like",
      error: error,
    });
  }
};

export const DeleteLike = async (req, res) => {
  try {
    const { post, like } = req.body;

    // remove like from like objects database
    const deltedlike = await Like.findOneAndDelete(like, {
      post: post,
      _id: like,
    });

    // remove the like from post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $pull: { likes: deltedlike._id },
      },
      { new: true }
    )
      .populate("likes")
      .populate("Comment")
      .exec();

    res.json({
      data: updatedPost,
    });
  } catch (error) {
    console.log("can't delete like  :", error);
    res.json({
      message: "server error could not delelte Like",
      error: error,
    });
  }
};
