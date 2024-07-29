import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signup = async (req, res) => {
  try {
    // get the data
    const { name, email, password, role } = req.body;

    // if user already exist:
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      return res.status(400).json({
        succes: false,
        message: "user is already exist",
      });
    }

    //   secure the passeword:
    let hashedpassword;
    try {
      hashedpassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        succes: false,
        message: "error in hashing password",
      });
    }

    // create entry in databasee:
    const user = User.create({
      name,
      email,
      password: hashedpassword,
      role,
    });

    res.status(200).json({
      succes: true,
      message: "user created succefully",
    });
  } catch (error) {
    console.log("error is :", error);
    return res.status(500).json({
      succes: false,
      message: "user could not create",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    // fetch the data from request.body
    const { email, password } = req.body;

    //  validate the data:
    if (!email || !password) {
      return res.json({
        succes: false,
        message: "please fill all filed",
      });
    }

    //  check if user is already exist or not:

    let user = await User.findOne({ email });

    if (!user) {
      return res.json({
        succes: false,
        message: "user is not regitered",
      });
    }

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };
    // if password is correct given by client

    if (await bcrypt.compare(password, user.password)) {
      // generate jwt token
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user = user.toObject();
      console.log(user);
      user.token = token;
      console.log(user);
      user.password = undefined;
      console.log(user);

      const Options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, Options).json({
        succes: true,
        message: "user logged in succefully",
        user,
        token,
      });
    } else {
      return res.json({
        succes: false,
        message: "password is incorrect",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.json({
      succes: false,
      message: "logine failed",
      error: error.message,
    });
  }
};
