
import { Router } from "express";
import { uploadlocalfile,uploadImage,uploadVideo } from "../controllers/fileUpload.controller.js";

export const udploadroute = Router();

udploadroute.route('/uploadlocalfile').post(uploadlocalfile);
udploadroute.route('/uploadImage').post(uploadImage);
udploadroute.route('/uploadVideo').post(uploadVideo);


  