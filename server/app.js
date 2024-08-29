import express from "express";
import MongoSingleton from "./src/config/mongoDB.js";
import { entorno } from "./src/config/config.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routerApp from './src/routes/index.js'
import { Server } from "socket.io";

const PORT = entorno.port;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(routerApp)

const server = app.listen(PORT, () => {
	console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

MongoSingleton.getInstance();

