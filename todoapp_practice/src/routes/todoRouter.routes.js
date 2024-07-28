import createTodo from "../controller/todeCreate.controller.js";

import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    res.send("me huu bhai");
})
router.route('/createTodo').post(createTodo)


export default router