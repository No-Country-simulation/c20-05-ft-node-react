import { Router } from "express";

const carerRouter = Router();

carerRouter.get("/carers"); //  Obtiene una lista de cuidadores según filtros (ubicación, tipo de mascota preferida, servicios ofrecidos, etc.)

carerRouter.get("/carers/:cip"); // Obtiene el perfil detallado de un cuidador específico.

carerRouter.post("/carers/services"); // Solicita un servicio a un cuidador específico.

carerRouter.get("/carers/services"); // Obtiene una lista de servicios solicitados al cuidador autenticado (solo para cuidadores).

carerRouter.put("/carers/services"); //  Actualiza el estado de un servicio solicitado (aceptar, rechazar, completar).

carerRouter.delete("/carers/services"); // Elimina un servicio solicitado.

carerRouter.get("/admin/services"); // Obtiene una lista de todos los servicios ofrecidos por cuidadores.

export default carerRouter;
