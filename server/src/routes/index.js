import { Router } from "express";
import userRouter from "../routes/userRouter.js";

const routerApp = Router();

routerApp.use("/api/v1", userRouter);

export default routerApp;
