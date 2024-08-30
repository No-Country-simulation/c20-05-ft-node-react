import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { entorno } from "../config/config.js";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
// import mongoose from 'mongoose'

const JWT_SECRET = entorno.secretJWT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createHash = (password) =>
	bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (user, password) => {
	return bcrypt.compareSync(password, user.password);
};

export const generateToken = (user) => {
	return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
		expiresIn: "30d",
	});
};

export default __dirname;
