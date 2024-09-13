import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
  nombre: {
    type: String,
    enum: ['guardería', 'hospedaje', 'cuidado a domicilio', 'alimentación de mascotas', 'paseo de mascotas'],
    required: true
  },
  precio: { type: Number, required: true },
  duracion: { type: String }, // relación precio x hora Por ej: '30 minutos', '1 hora'
  // Otros detalles específicos del servicio
});

export const serviceType = model('Service', serviceSchema);
