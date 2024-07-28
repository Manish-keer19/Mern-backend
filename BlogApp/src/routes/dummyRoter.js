import { Router } from "express";
import dummyController from "../controllers/dumyController.js";
import app from "../../app.js";

const dumyrouter = Router();

dumyrouter.get('/',(req,res)=>{
 res.send("hello you are in dm");
})
dumyrouter.route('/dummy').get(dummyController)


export default dumyrouter