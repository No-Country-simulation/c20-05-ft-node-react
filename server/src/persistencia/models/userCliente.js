import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
	first_name: { type: String, trim: true, required: true },
	last_name: { type: String, trim: true, required: true },
	email: { type: String, required: true, lowercase: true, unique: true },
	address: { type: String, required: true },
	phone: { type: Number, required: true },
	city: { type: String, required: true },
	zipCode: { type: Number, required: true },
	isadmin: { type: Boolean, default: false },
	role: { type: String, enum: ["owner", "carer"], default: "owner" },
	password: { type: String, required: true },
	// pet: [{ type: Schema.Types.ObjectId, ref: 'pets' }],
});
export const UserModel = model("user", UserSchema);
