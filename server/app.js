import express from "express";
import MongoSingleton from "./src/config/mongoDB.js";
import { entorno } from "./src/config/config.js";
import { Server } from "socket.io";

const PORT = entorno.port;
const app = express();

const server = app.listen(PORT, () => {
	console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
MongoSingleton.getInstance();
