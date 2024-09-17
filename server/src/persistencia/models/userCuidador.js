import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserCuidadorSchema = new Schema({
	first_name: { type: String, trim: true, required: true },
	last_name: { type: String, trim: true, required: true },
	email: { type: String, required: true, lowercase: true, unique: true },
	password: { type: String, required: true },
	province: { type: String, required: false },
	city: { type: String, required: false },
	address: { type: String, required: false },
	phone: { type: Number, required: false },
	zipCode: { type: Number, required: false },
	isadmin: { type: Boolean, default: false },
	birthdate: { type: Date, required: false },
	prefered_name: { type: String, required: false },
	preferencePet: { type: String, required: false }, // tipo de animal que prefiere cuidar
	typePreferencePet: { type: String, required: false }, // elegir peso, edad del pet, consultar con leo
	aboutMe: { type: String, required: false }, // sobre mí
	aboutYourHome: { type: [String], required: false }, // en caso de sí, especificar el servicio de casa (si tiene perro, hijxs)
	typeService: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
	], // tipo de servicio
	availability: { type: Boolean, required: false }, // disponibilidad horaria,
	bathroomServicePrice: { type: Number, required: false }, // precio agregado por servicio de baño
	pricePerVet: { type: Number, required: false }, // precio agregado por llevar al veterinario
	specialties: { type: String, required: false }, // cuidados especiales (cahorros, en celo, enfermos, viejitos si/no)
	experience: { type: String, required: false }, // experiencia que cuenta el cuidador (solo años de exp)
	role: { type: String, enum: ["owner", "carer"], default: "owner" },
	profilePicture: { type: String, required: true }, // URL de la foto de perfil
	images: { type: [String], required: false }, // URLs de otras fotos
	// dni: { type: [String], required: true }, foto del dni ambos lados cuidador
	// numberDni: { type: Number, required: true }, // n° del dni cuidador
	networks: { type: String, required: false }, // redes sociales del cuidador
	reviews: [{ type: Schema.Types.ObjectId, ref: "reviews" }], // reviews del cuidador
});

export const UserCuidador = model("UserCuidador", UserCuidadorSchema);
