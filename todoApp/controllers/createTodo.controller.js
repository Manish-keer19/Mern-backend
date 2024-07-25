import { Todo } from "../model/todo.model.js";

const creatTodo = async (req, res) => {
  try {
    // extract title and desc from request.body
    const { title, description } = req.body;
    //  create a new todo obj insert in bd
    console.log("title is ", title);
    console.log("description  is ", description);
    const response = await Todo.create({
      title,
      description,
    });
    // send a json response with a succes flag
    res.status(200).json({
      succes: true,
      data: response,
      message: "entry created succefullly",
    });
  } catch (error) {
    console.log("couldn't create todos");
    res.status(500).json({
      succes: false,
      data: "internal server error",
      message: error.message,
    });
  }
};

export { creatTodo };
