import express from "express";
import cors from "cors";

import relicRoutes from "./routes/relicRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({
        message: "API is running"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        timestamp: new Date().toISOString()
    });
});

app.use("/relics", relicRoutes);


app.use(errorHandler);

export default app;