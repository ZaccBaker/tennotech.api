import express from "express";

import{
    getRelics,
    getRelicsByType,
    getRelicsByName
} from "../controllers/relicController.js";


const relicRouter = express.Router();


relicRouter.get("/", getRelics);

relicRouter.get("/type/:id", getRelicsByType);

relicRouter.get("/name/:name", getRelicsByName);


export default relicRouter;