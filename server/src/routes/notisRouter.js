import { Router } from "express";

const notisRouter = Router();

notisRouter.post("/notifications"); // Crea una nueva notificación (admin).

notisRouter.get("/notifications"); // Obtiene todas las notificaciones del usuario autenticado.

export default notisRouter;
