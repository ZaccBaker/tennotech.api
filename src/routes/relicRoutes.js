import express from "express";

import adminCheck from "../middleware/adminCheck.js";

import{
    getRelics,
    getRelicsByType,
    getRelicsByName,
    addRelics,
    updateRelic,
    removeRelic
} from "../controllers/relicController.js";


const relicRouter = express.Router();


relicRouter.get("/", getRelics);

relicRouter.get("/type/:type", getRelicsByType);

relicRouter.get("/name/:name", getRelicsByName);

relicRouter.use(adminCheck);

relicRouter.post("/", addRelics);

relicRouter.put("/:name", updateRelic);

relicRouter.delete("/:name", removeRelic);

export default relicRouter;