import { Router } from "express";
import { signup, login } from "../controllers/Auth.controller.js";
import { auth, isAdmin, isStudent } from "../middleware/auth.middelware.js";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/auth").get(auth,(req, res) => {
  res.json({
    succes: true,
    message: "you authenticate succefully",
  });
});
router.route("/student").get(auth, isStudent,(req, res) => {
  res.json({
    succes: true,
    message: "you are protected student",
  });
});
router.route("/admin").get(auth,isAdmin,(req, res) => {
  res.json({
    succes: true,
    message: "you are protected admin ",
  });
});

router.route("/createuser").get((req, res) => {
  res.send("you are in create user page");
});

export default router;
