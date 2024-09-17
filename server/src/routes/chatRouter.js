import { Router } from "express";

const chatRouter = Router();

chatRouter.post("/messages"); // Envía un nuevo mensaje a otro usuario.

chatRouter.get("/messages"); // Obtiene todos los mensajes del usuario autenticado.

chatRouter.get("/messages/:mid"); // Obtiene los detalles de un mensaje específico.

export default chatRouter;
