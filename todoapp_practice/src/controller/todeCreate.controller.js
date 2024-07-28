import { json } from "express";
import { User } from "../models/todo.model.js";

const createTodo = async (req,res)=>{

     const {title,decsription} = req.body;

     console.log("title is : ",title)
     console.log("decsription is : ",decsription)

     if(title =="" || decsription==""){
        console.log("all field must required")
     }



     try {
        const response =  await User.create({
         title,
         decsription
        });

         res.status(200).json(
            {
               status:"ok",
               data:response,
               message:"new todo create succesfully"
            }
         )
        
     } catch (error) {
        console.log("couldn't create new todo",error)
        res.status(200).json(
         {
            status:"ok",
            data:"internal server eroor bro",
            message:"new todo create succesfully"
         }
      )
     }
  
}

export default createTodo;