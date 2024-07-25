// //  step1: create a folder
// // step2 : move into that folder
// // step3: npm init -y
// // step4: open folder using VSCode
// // step5: npm i express
// // step6: creat serves.js file

// import express from "express";
const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// console.log(app);

// Start the server
app.listen(3000, () => {
  console.log("server is run on 3000 port..");
});

app.get("/", (resquest, response) => {
  response.send("Hello Welocome to  my server");
});

app.post("/api/cars", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  console.log("car submited succesfully");
});



// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase')
.then(() => {
    console.log("Connection is successful");
})
.catch((error) => {
    console.error("An error has occurred while connecting to MongoDB:", error);
});