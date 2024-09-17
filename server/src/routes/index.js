import { Router } from "express";
import userRouter from "../routes/userRouter.js";
import carerRouter from "./carerRouter.js";

const routerApp = Router();

routerApp.use("/api/v1", userRouter);
routerApp.use("/api/v2", carerRouter);

export default routerApp;
