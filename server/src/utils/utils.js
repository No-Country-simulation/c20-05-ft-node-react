import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { entorno } from '../config/config.js'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
// import mongoose from 'mongoose'
import nodemailer from 'nodemailer'

const JWT_SECRET = entorno.secretJWT
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const createHash = (password) =>
	bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const isValidPassword = (user, password) => {
	return bcrypt.compareSync(password, user.password)
}

export const generateToken = (user) => {
	return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
		expiresIn: '30d',
	})
}

const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	secure: false,
	port: 587,
	auth: {
		user: entorno.MAIL_USER,
		pass: entorno.MAIL_PASS,
	},
})

export const sendEmail = async (to, subject, html) => {
	const mailOptions = {
		from: entorno.MAIL_USER,
		to,
		subject,
		html,
	}
	try {
		await transporter.sendMail(mailOptions)
		console.log('Email sent successfully')
	} catch (error) {
		console.error('Error sending email:', error)
	}
}

export default __dirname
