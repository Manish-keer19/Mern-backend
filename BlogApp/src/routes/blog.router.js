import { Router } from "express";
import CreateComment from "../controllers/comment.controller.js";
import { creatPost, getAllposts } from "../controllers/post.controller.js";
import { createLike,DeleteLike } from "../controllers/like.controller.js";

const blogrouter = Router();

// All router of blog post apk
blogrouter.route('/comment/createComment').post(CreateComment)
blogrouter.route('/post/getAllPost',).get(getAllposts)
blogrouter.route('/post/createPost').post(creatPost)
blogrouter.route('/likes/createlike').post(createLike)
blogrouter.route('/likes/deleteLike').post(DeleteLike)

export default blogrouter;