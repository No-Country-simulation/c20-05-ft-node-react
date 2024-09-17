import mongoose from 'mongoose';

const { Schema } = mongoose;

const reviewSchema = new Schema({
    // cuidadorId: Referencia al cuidador de la mascota, usando el modelo UserCuidador.
  cuidadorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserCuidador',  // Referencia al modelo del cuidador
    required: true,
  },
  // userId: Referencia al usuario que deja la reseña, usando el modelo UserModel.
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',  // Referencia al modelo del usuario que realiza la reseña
    required: true,
  },
  // rating: Calificación de la reseña, que debe ser un número entre 1 y 5.
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  //  Un comentario opcional con un máximo de 500 caracteres.
  comment: {
    type: String,
    maxlength: 500,
  },
  // Fecha de creación de la reseña, que se establece automáticamente al momento de la creación.
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ReviewModel = mongoose.model('Review', reviewSchema);

export default ReviewModel;