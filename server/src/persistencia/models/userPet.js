import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const PetSchema = new Schema({
	name: { type: String, trim: true, required: true },
	type: { type: String, required: true },
	weight: { type: String, required: true },
	age: { type: String, required: true },
	image: { type: [String], required: true },
	pathology: { type: String, default: null },
	medication: { type: String, default: null },
});
export const PetModel = model("pet", PetSchema);
