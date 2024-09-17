import { Router } from "express";

const payRouter = Router();

payRouter.post("/reservations"); //  Crea una nueva reserva de servicio.

payRouter.get("/reservations"); // Obtiene todas las reservas del usuario autenticado (dueño o cuidador).

payRouter.get("/reservations/:rid"); // Obtiene los detalles de una reserva específica.

payRouter.put("/reservations/:rid"); // Actualiza los detalles de una reserva específica.

payRouter.delete("/reservations/:rid"); //  Elimina una reserva específica.

payRouter.post("/payments"); // Procesa un pago para una reserva.

payRouter.get("/payments"); // Obtiene el historial de pagos del usuario autenticado.

payRouter.get("/payments/rid"); // Obtiene los detalles de un pago específico.

payRouter.get("/admin/reservations"); // Obtiene una lista de todas las reservas.

export default payRouter;
