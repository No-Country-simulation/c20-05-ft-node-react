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


// Obtener reseñas con mejores calificaciones
export const getTopRatedReviews = async (req, res) => {
    try {
        // Obtener todas las reseñas con calificación máxima (5)
        const topRatedReviews = await ReviewModel.find({ rating: 5 }).populate("cuidadorId", "first_name last_name profilePicture");

        if (topRatedReviews.length === 0) {
            return res.status(404).json({ message: "No hay reseñas con calificación máxima." });
        }

        res.status(200).json({ reviews: topRatedReviews });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las reseñas mejor calificadas." });
    }
};

// Obtener las reseñas más recientes de cada cuidador
export const getRecentReviewsByCarer = async (req, res) => {
    try {
        const recentReviews = await ReviewModel.aggregate([
            {
                $sort: { createdAt: -1 }, // Ordenar las reseñas por fecha de creación (más recientes primero)
            },
            {
                $group: {
                    _id: "$cuidadorId", // Agrupar por el cuidador
                    latestReview: { $first: "$$ROOT" }, // Obtener la reseña más reciente de cada cuidador
                },
            },
            { //$lookup: Hace una consulta en la colección UserCuidador para obtener los datos del cuidador.
                $lookup: {
                    from: "usercuidadors", // Nombre de la colección de cuidadores
                    localField: "_id", // `cuidadorId` del review
                    foreignField: "_id", // ID del cuidador
                    as: "cuidador", // Nombre del campo en el que queremos los datos del cuidador
                },
            },
            {
                $unwind: "$cuidador", // Desglosar el array de cuidadores para tener un solo objeto
            },
            {
                $project: { // $project: Selecciona los campos que queremos devolver, incluyendo los detalles de la reseña y los datos del cuidador.
                    _id: 0, // No queremos el _id generado
                    cuidador: { first_name: 1, last_name: 1, profilePicture: 1 }, // Solo los campos del cuidador que necesitamos
                    rating: "$latestReview.rating",
                    comment: "$latestReview.comment",
                    createdAt: "$latestReview.createdAt",
                },
            },
        ]);

        if (recentReviews.length === 0) {
            return res.status(404).json({ message: "No se encontraron reseñas recientes." });
        }

        res.status(200).json({ recentReviews });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las reseñas recientes." });
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

// Actualizar una reseña
// @route   PUT /api/v1/reviews/:eid
// @access  Private (solo el autor de la reseña)
export const updateReview = async (req, res) => {
    try {
        const { eid } = req.params;
        const userId = req.user.id; // Supone que hay autenticación y req.user contiene al usuario autenticado
        const { rating, comment } = req.body;

        // Buscar la reseña por ID
        const review = await ReviewModel.findById(eid);
        if (!review) {
            return res.status(404).json({ message: "Reseña no encontrada." });
        }

        // Verificar si el usuario es el autor de la reseña
        if (review.userId.toString() !== userId) {
            return res.status(403).json({ message: "No tienes permiso para actualizar esta reseña." });
        }

        // Actualizar los campos de la reseña
        if (rating) review.rating = rating;
        if (comment) review.comment = comment;

        // Guardar la reseña actualizada
        const updatedReview = await review.save();

        res.status(200).json({ message: "Reseña actualizada con éxito.", review: updatedReview });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar la reseña." });
    }
};
