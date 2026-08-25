import express from "express";

import{
    getRelics,
    getRelicsByType,
    getRelicsByName,
    addRelics
} from "../controllers/relicController.js";


const relicRouter = express.Router();


relicRouter.get("/", getRelics);

relicRouter.get("/type/:type", getRelicsByType);

relicRouter.get("/name/:name", getRelicsByName);

relicRouter.post("/", addRelics);

export default relicRouter;