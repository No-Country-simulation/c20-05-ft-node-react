import { Router } from "express";
import {createReviews , deleteReview} from "../controllers/reviewController.js";

const reviewRouter = Router();

reviewRouter.post("/reviews" ,createReviews); //  Crea una nueva reseña para un cuidador.

//reviewRouter.get("/reviews/carer/"); // Obtiene todas las reseñas de un cuidador específico. (la e es de estrella)

//reviewRouter.get("/reviews/:eid"); // Obtiene los detalles de una reseña específica. (la e es de estrella)

reviewRouter.put("/reviews/:eid"); // Actualiza una reseña específica (solo por el autor de la reseña).

reviewRouter.delete("/reviews/:eid", createReviews); // Elimina una reseña específica (solo por el autor de la reseña o administrador).

export default reviewRouter;



// ruta nueva de mejores calificaciones de cuidadores
// reviews recientes 
// crear los usuarios cuidador con reseñas 30 y ver img 
// descripción req status rechazo por exceso, ver caracteres 

