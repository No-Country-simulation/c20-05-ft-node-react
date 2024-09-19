import express from "express";
import MongoSingleton from "./src/config/mongoDB.js";
import { entorno } from "./src/config/config.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import routerApp from "./src/routes/index.js";
import { errorHandler, notFound } from "./src/middlewares/errorHandler.js";

// import { Server } from "socket.io";

const PORT = 8080;
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(routerApp);

app.use(errorHandler);
app.use(notFound);

const server = app.listen(PORT, () => {
	console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

MongoSingleton.getInstance();
