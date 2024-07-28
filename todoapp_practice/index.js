import connectDb from "./src/database/dbConnect.js";
import app from "./app.js";

const port = process.env.PORT||5000;

try {
    connectDb()
    
    app.listen(port,()=>{
        console.log("surver is runnin at port :",port)
    })
    
} catch (error) {
    console.log("ni hora bhai connect db")
    
}

