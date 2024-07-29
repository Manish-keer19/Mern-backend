import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const auth = (req, res, next) => {
  try {
    // const token = req.body.token;
    // const token =  req.cookies.token;

    // const token = req.header('Authorization').replace("Bearer ","");
    const token =
      req.body.token ||
      req.cookies.token ||
      req.header("Authorization").replace("Bearer ", "");

    console.log("token is ", token);

    if (!token) {
      return res.json({
        succes: false,
        message: "token is missing",
      });
    }
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);
      req.user = payload;
    } catch (error) {
      return res.json({
        succes: false,
        message: "token is invalid",
      });
    }
  } catch (error) {
    return res.json({
      succes: false,
      message: "something went wrong while verifying the token",
    });
  }
  next();
};

export const isStudent = (req, res, next) => {
  try {
    console.log(req.user);
    if (req.user.role !== "Student") {
      return res.json({
        succes: false,
        message: "you have not write to go student section",
      });
    }
  } catch (error) {
    return res.json({
      succes: false,
      message: "something went wrong",
    });
  }
  next();
};
export const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.json({
        succes: false,
        message: "you have not write to go admin section",
      });
    }
  } catch (error) {
    return res.json({
      succes: false,
      message: "something went wrong",
    });
  }
  next();
};
