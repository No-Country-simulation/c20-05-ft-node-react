import { Router } from "express";
import {
	createReview,
	deleteReview,
	getTopRatedReviews,
	getRecentReviewsByCarer,
} from "../controllers/reviewController.js";

const reviewRouter = Router();

reviewRouter.post("/reviews", createReview); //  Crea una nueva reseña para un cuidador.

//reviewRouter.get("/reviews/carer/"); // Obtiene todas las reseñas de un cuidador específico. (la e es de estrella)

//reviewRouter.get("/reviews/:eid"); // Obtiene los detalles de una reseña específica. (la e es de estrella)

reviewRouter.put("/reviews/:eid"); // Actualiza una reseña específica (solo por el autor de la reseña).

reviewRouter.delete("/reviews/:eid", deleteReview); // Elimina una reseña específica (solo por el autor de la reseña o administrador).

reviewRouter.get("/reviews/top-rated", getTopRatedReviews); // Obtiene solo las reseñas con mejores calificaciones.

reviewRouter.get("/reviews/recent", getRecentReviewsByCarer); // Obtiene las reseñas más recientes de cada cuidador.

export default reviewRouter;

// crear los usuarios cuidador con reseñas 30 y ver img
// descripción req status rechazo por exceso, ver caracteres
