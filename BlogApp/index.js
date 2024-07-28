import app from "./app.js";
import connectDb from "./src/database/database.js";

const port = process.env.PORT

connectDb()




app.listen(port,()=>{
    console.log(`server is running on : http://localhost:${port}`);
})