import express from "express"
// import dumyrouter from "./src/routes/dummyRoter.js";
import blogrouter from "./src/routes/blog.router.js"


const app = express();

app.get("/",(req,res)=>{
    res.send("<h1> hello you are in home page <h1>");
})

app.use(express.json());



// app.use('/dm',dumyrouter)

app.use("/api/v1/blogApi",blogrouter);

export default app

