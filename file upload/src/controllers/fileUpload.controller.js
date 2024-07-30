import path from "path";
import { fileURLToPath } from "url";

// Define __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const uploadlocalfile = (req, res) => {
  try {
    // Extract file from request
    const file = req.files.file;
    console.log("file", file);

    // Construct file path to the root directory's public/temp folder
    const rootDir = path.resolve(__dirname, "../../"); // Adjust the relative path to reach the root directory
    const filePath = path.join(rootDir, "public", "temp", file.name);
    console.log("path:", filePath);

    // validate the file
    const fileName = file.name.toLowerCase();
    const allowedExtensions = [".png", ".jpg", ".jpeg", ".gif"];
    const fileExtension = fileName.slice(fileName.lastIndexOf("."));
    console.log("fileExtension is:", fileExtension);

    // Check if the file extension is allowed
    if (!allowedExtensions.includes(fileExtension)) {
      return res.status(400).json({
        success: false,
        message: "Invalid file type. Only image files are allowed.",
      });
    }

    // Move file to the constructed path
    file.mv(filePath, (error) => {
      if (error) {
        console.log("some error occurred", error);
        return res.status(500).json({
          success: false,
          message: "Could not upload file",
          error: error.message,
        });
      }

      res.json({
        success: true,
        message: "File is saved successfully in server",
      });
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: "Could not upload file, failed to upload",
      error: error.message,
    });
  }
};

// upload in cloudinary:

import { v2 as cloudinary } from "cloudinary";
import { Image } from "../model/image.model.js";

async function UploadFileCloudinary(filePath, folder) {
  // const options = {
  //   folder: "mansih",

  //   transformation:
  //     { width: 800, height: 600, crop: 'limit' }
  // }
  try {
    return await cloudinary.uploader.upload(filePath, {
      folder: "manish",

      transformation: {
        width: 800,
        height: 600,
        crop: "limit",
        quality: "auto:good",
      },
    });
  } catch (error) {
    console.log("file cloudinary par upload nahi ho saki");
  }
}

// uppload image in cloudinary:
export const uploadImage = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log("name: ", name);
    console.log("tags: ", tags);
    console.log("email: ", email);
    const file = req.files.imageFile;
    console.log("file is : ", file);

    // valdidate the file formate :

    // validate the file
    const fileName = file.name.toLowerCase();
    const allowedExtensions = [".png", ".jpg", ".jpeg", ".gif"];
    const fileExtension = fileName.slice(fileName.lastIndexOf("."));
    console.log("fileExtension is:", fileExtension);

    // Check if the file extension is allowed
    if (!allowedExtensions.includes(fileExtension)) {
      return res.status(400).json({
        success: false,
        message: "Invalid file type. Only image files are allowed.",
      });
    }

    // move the file in cloudinary:
    const response = await UploadFileCloudinary(file.tempFilePath, "manish");

    // put the image detail in db:
    const savedfile = await Image.create({
      name,
      email,
      tags,
      imageUrl: response.secure_url,
    });
    console.log("savedfile in database", savedfile);

    console.log("response is ",response);
    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "file saved succefully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "some error has occured",
      error: error.message,
    });
  }
};

// upload video in cloudinary:
import { Video } from "../model/video.model.js";
export const uploadVideo = async (req, res) => {
  try {
    // fetch the data from req.body:
    const { name, tags, email, videoFile } = req.body;
    console.log("email:", email);
    console.log("tags:", tags);
    console.log("name:", name);

    // fetch the file:
    const file = req.files.videoFile;
    console.log("File: ", file);

    // validate the file formate:
    // const fileName = file.toLowerCase();
    // const allowedExtensions = ["mp4", "avi", "move", "mkv"];
    // const fileExtension = fileName.slice(fileName.lastIndexOf("."));

    // if (!allowedExtensions.includes(fileExtension)) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid file type. Only image files are allowed.",
    //   });
    // }

    // upload the video in cloudinary:

    const response = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "manish",
      resource_type: "auto",
      transformation: {
        width: 800,
        height: 600,
        crop: "limit",
        quality: "auto:good", 
      },
    });
    console.log("respone is :", response);

    const savedvideo = await Video.create({
      name,
      email,
      tags,
      videoUlr: response.secure_url,
    });
    console.log("savved video is :", savedvideo);
    res.json({
      success: true,
      videoUlr: response.secure_url,
      message: "video saved succefully",
    });
  } catch (error) {
    console.log("error is ", error);
    res.json({
      success: false,
      message: "some error has occured",
      error: error.message,
    });
  }
};
