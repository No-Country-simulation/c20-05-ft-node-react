import dotenv from 'dotenv'

dotenv.config()

export const entorno = {
	port: process.env.PORT,
	DB_URL: process.env.DB_URL,
	secretJWT: process.env.JWT_SECRET,
}
