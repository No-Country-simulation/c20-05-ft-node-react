import { Schema, model } from "mongoose";

const ServiceRequestSchema = new Schema({
	carer: {
		type: Schema.Types.ObjectId,
		ref: "UserCuidador",
		required: true,
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: "UserModel",
		required: true,
	},
	serviceType: {
		type: Schema.Types.ObjectId,
		ref: "Service",
		required: true,
	},
	status: {
		type: String,
		enum: ["pending", "accepted", "rejected", "completed"],
		default: "pending",
	},
	requestedAt: {
		type: Date,
		default: Date.now,
	},
});
export const ServiceRequest = model("ServiceRequest", ServiceRequestSchema);
