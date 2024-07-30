import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

// define port :
const port = process.env.PORT || 4000;

app.listen(port,()=>{

    console.log("❤️ server is running on port :",port);

});
