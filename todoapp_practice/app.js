import express from "express"

const app = express();

app.use(express.json())
// import routes 

app.get('/',(req,res)=>{
    res.send("surever is ruunning bhai");
})
  import router from "./src/routes/todoRouter.routes.js";

 app.use('/todo',router)


 export default app;



