import express from "express";

import adminCheck from "../middleware/adminCheck.js";

import{
    
} from "../controllers/contentController.js";


const contentRouter = express.Router();


// contentRouter.get("/", getRelics);


export default contentRouter;