import { Schema, model } from "mongoose";

const UserSchema = new Schema({
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
	//birthdate: { type: Date, required: true},
	prefered_name: { type: String, required: false },
	role: { type: String, enum: ["owner", "carer"], default: "owner" },
	profilePicture: { type: String, required: false }, // URL de la foto de perfil
	images: { type: [String], required: false }, // URLs de otras fotos
	// pet: [{ type: Schema.Types.ObjectId, ref: 'pets' }],
});

export const UserModel = model("UserModel", UserSchema);
