import app from "./app.js";
import connectDb from "./src/config/database.js";
const  port= process.env.PORT||4000;

connectDb();

app.get('/',(req,res)=>{
  res.send("<h1> your are in home section</h1>")
})

app.listen(port, () => {
  console.log(`❤️👍server is runnig on port ${port}`);
});
