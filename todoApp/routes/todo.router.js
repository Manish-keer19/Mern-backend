// first import the router from express
import { Router } from "express";

const todorouter = Router();

// import the controller

import { creatTodo } from "../controllers/createTodo.controller.js";

 todorouter.route('/createTodo').post(creatTodo)

export default todorouter;
