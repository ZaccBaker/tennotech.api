import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorHandler.js"

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "API is running"
    });
});

app.use("/api/users", userRoutes);

app.use(errorHandler);

export default app;