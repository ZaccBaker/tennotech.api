import express from "express";
import cors from "cors";

import relicRoutes from "./routes/relicRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        message: "API is running"
    });
});

app.use("/relics", relicRoutes);

export default app;