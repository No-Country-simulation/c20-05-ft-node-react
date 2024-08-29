import express from "express";
import MongoSingleton from "./src/config/mongoDB.js";
import { entorno } from "./src/config/config.js";
import { Server } from "socket.io";
import cors from "cors";
import routerApp from "./src/routes/userRouter.js";
const PORT = entorno.port;
const app = express();
// cors
app.use(cors({ origin: "*" }));

app.use(express.json())
app.use(routerApp)

const server = app.listen(PORT, () => {
	console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
MongoSingleton.getInstance();
