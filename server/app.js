import express from "express";
import MongoSingleton from "./src/config/mongoDB.js";
import { entorno } from "./src/config/config.js";
// import { Server } from "socket.io";
import routerApp from "./src/routes/index.js";
import cors from "cors";

const PORT = entorno.port;
const app = express();

app.use(express.json());
app.use(routerApp);

app.use(cors({ origin: "*" }));

const server = app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
MongoSingleton.getInstance();
