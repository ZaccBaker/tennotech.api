import express from "express";

import{
    getRelics,
    getRelicsByType,

} from "../controllers/relicController.js";


const relicRouter = express.Router();


relicRouter.get("/", getRelics);

relicRouter.get("/type/:id", getRelicsByType);


export default relicRouter;