import express, { application } from "express";

import fileUpload from "express-fileupload";

// inize the app initialised
const app = express();

// middelware added:
app.use(express.json());
app.use(fileUpload(
    {
        useTempFiles : true,
        tempFileDir : '/tmp/'
    }
));

// connect to db:
import { connectDb } from "./src/config/database.js";
connectDb();

// connect to cloudynary:
import { cloudinaryConnect } from "./src/config/cloudinary.js";
cloudinaryConnect();

// mount api routes:
import { udploadroute } from "./src/routes/router.js";
app.use("/api/v1/upload", udploadroute);

export default app;
