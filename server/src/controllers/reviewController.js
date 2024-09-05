import ReviewModel from '../persistencia/models/reviews.js';
import { UserModel } from '../persistencia/models/userCliente.js';
import { UserCuidador } from '../persistencia/models/userCuidador.js';

// Crear una nueva reseña
export const createReview = async (req, res) => {
    try {
        const { userId, cuidadorId, rating, comment } = req.body;

        // Validar que los campos obligatorios están presentes
        if (!userId || !cuidadorId || !rating) {
            return res.status(400).json({ message: "Faltan datos necesarios." });
        }

        // Verificar si el usuario y el cuidador existen
        const user = await UserModel.findById(userId);
        const cuidador = await UserCuidador.findById(cuidadorId);

        if (!user || !cuidador) {
            return res.status(404).json({ message: "Usuario o cuidador no encontrados." });
        }

        // Crear una nueva reseña
        const newReview = new ReviewModel({
            userId,
            cuidadorId,
            rating,
            comment,
        });

        // Guardar la reseña en la base de datos
        await newReview.save();

        // Agregar la reseña al cuidador
        cuidador.reviews.push(newReview._id);
        await cuidador.save();

        res.status(201).json({ message: "Reseña creada con éxito.", review: newReview });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear la reseña." });
    }
};

// Eliminar una reseña
export const deleteReview = async (req, res) => {
    try {
        const { eid } = req.params;
        const userId = req.user.id; // Supone que hay autenticación y req.user contiene al usuario autenticado

        // Buscar la reseña por ID
        const review = await ReviewModel.findById(eid);
        if (!review) {
            return res.status(404).json({ message: "Reseña no encontrada." });
        }

        // Verificar si el usuario es el autor de la reseña o un administrador
        const user = await UserModel.findById(userId);
        if (review.userId.toString() !== userId && !user.isadmin) {
            return res.status(403).json({ message: "No tienes permiso para eliminar esta reseña." });
        }

        // Eliminar la reseña
        await ReviewModel.findByIdAndDelete(eid);

        // Eliminar la reseña de la lista de reseñas del cuidador
        await UserCuidador.updateOne(
            { _id: review.cuidadorId },
            { $pull: { reviews: review._id } }
        );

        res.status(200).json({ message: "Reseña eliminada con éxito." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar la reseña." });
    }
};
