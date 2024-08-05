import express from "express";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
dotenv.config();

// all routes
import { catagoryroute } from "./src/routes/catagory.route.js";
import { authrouter } from "./src/routes/auth.route.js";
import { courserouter } from "./src/routes/Course.route.js";
import { profileRoute } from "./src/routes/Profile.route.js";
import { sectionroute } from "./src/routes/section.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// all routers
app.use("/api/v1/auth", authrouter);
app.use("/api/v1/profile", profileRoute);
app.use("/api/v1/course", courserouter);
app.use("/api/v1/catagory", catagoryroute);
app.use("/api/v1/section", sectionroute);

export default app;
