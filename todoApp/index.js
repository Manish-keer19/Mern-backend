import express from "express"

const app = express();
const port = process.env.PORT || 5000

// middleware to parse json request body

app.use(express.json())

// import routes from todo api 
import todorouter from "./routes/todo.router.js";

// mount the todo api routes:
app.use("/api/v1",todorouter);

import Dbconnection from "./config/database.config.js";
Dbconnection()

app.get('/',(req,res)=>{
    res.send("<h1> server is running</h1>")
})

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})