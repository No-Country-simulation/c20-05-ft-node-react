import { Router } from "express";

const reviewRouter = Router();

reviewRouter.post("/reviews"); //  Crea una nueva reseña para un cuidador.

//reviewRouter.get("/reviews/carer/"); // Obtiene todas las reseñas de un cuidador específico. (la e es de estrella)

//reviewRouter.get("/reviews/:eid"); // Obtiene los detalles de una reseña específica. (la e es de estrella)

reviewRouter.put("/reviews/:eid"); // Actualiza una reseña específica (solo por el autor de la reseña).

reviewRouter.delete("/reviews/:eid"); // Elimina una reseña específica (solo por el autor de la reseña o administrador).

export default reviewRouter;
