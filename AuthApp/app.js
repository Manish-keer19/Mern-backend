import express from "express"
import router from "./src/routes/route.routes.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser())


// define the router here

app.use('/api/v1',router);



export default app