import dotenv from "dotenv";

dotenv.config();

export const entorno = {
	port: process.env.PORT,
	DB_URL: process.env.DB_URL,
	secretJWT: process.env.JWT_SECRET,
	CLOUD_NAME: process.env.CLOUD_NAME,
	API_KEY: process.env.API_KEY,
	API_SECRET: process.env.API_SECRET,
	NODE_ENV: process.env.NODE_ENV,
	MAIL_USER: process.env.MAIL_USER,
	MAIL_PASS: process.env.MAIL_PASS,
};
