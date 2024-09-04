import { Schema, model } from "mongoose";

const UserCuidadorSchema = new Schema({
	first_name: { type: String, trim: true, required: true },
	last_name: { type: String, trim: true, required: true },
	email: { type: String, required: true, lowercase: true, unique: true },
	password: { type: String, required: true },
	address: { type: String, required: false },
	phone: { type: Number, required: false },
	city: { type: String, required: false },
	zipCode: { type: Number, required: false },
	isadmin: { type: Boolean, default: false },
	preferencePet: { type: String, required: false }, // tipo de animal que prefiere cuidar
	typePreferencePet: { type: String, required: false }, // elegir peso, edad del pet, consultar con leo
	aboutMe: { type: String, required: false },
	services: { type: String, required: false }, // domicilio si/no en caso de sí especificar el servicio de casa
	aboutYouHome: { type: String, required: false },
	availability: { type: Boolean, required: false }, // disponibilidad horaria, preguntar con leo
	daycarePrice: { type: Number, required: false }, // precio por guardería
	accommodationPrice: { type: Number, required: false }, // precio hospedaje
	homeCarePrice: { type: Number, required: false }, // cuidado a domicilio del dueño
	feedPrice: { type: Number, required: false }, // precio por alimentar
	walkPrice: { type: Number, required: false }, // precio por paseo
	bathroomServicePrice: { type: Number, required: false }, // precio agregado por servicio de baño
	pricePerVet: { type: Number, required: false }, // precio agregado por llevar al veterinario
	specialties: { type: String, required: false }, // cuidados especiales (cahorros, en celo, enfermos, viejitos si/no)
	experience: { type: String, required: false }, // experiencia que cuenta el cuidador
	role: { type: String, enum: ["owner", "carer"], default: "owner" },
	profilePicture: { type: String, required: true }, // URL de la foto de perfil
	images: { type: [String], required: false }, // URLs de otras fotos
	dni: { type: [String], required: true }, // foto del dni ambos lados cuidador
	numberDni: { type: Number, required: true }, // n° del dni cuidador
	networks: { type: String, required: false }, // redes sociales del cuidador
	reviews: [{ type: Schema.Types.ObjectId, ref: "reviews" }], // reviews del cuidador
});

export const UserCuidador = model("UserCuidador", UserCuidadorSchema);
