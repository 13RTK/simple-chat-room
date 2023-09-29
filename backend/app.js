import express from "express";
import cors from "cors";
import morgan from "morgan";

import messageRouter from "./route/messageRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));
app.use((req, _res, next) => {
    req.requestTime = Date.now();

    next();
});

app.use("/api/v1", messageRouter);

export default app;
