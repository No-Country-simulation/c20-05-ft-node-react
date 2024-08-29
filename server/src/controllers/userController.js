import { UserModel } from '../persistencia/models/userCliente.js'
import { createHash, generateToken, isValidPassword } from '../utils/utils.js'

// @desc    Register a new user
// @route   POST /api/v1/createuser
// @access  Public
export const createUser = async (req, res) => {
	const email = req.body.email
	const password = req.body.password
	const user = await UserModel.findOne({ email })
	if (user) {
		res.status(400)
		throw new Error('User already exists')
	}
	const hashedPassword = createHash(password)
	req.body.password = hashedPassword
	const userCreated = await UserModel.create(req.body)
	if (userCreated) {
		res.status(201).json(userCreated)
	} else {
		res.status(400)
		throw new Error('Invalid user data')
	}
}

// @desc    Auth user & get token
// @route   POST /api/v1/login
// @access  Public
export const login = async (req, res) => {
	try {
		const { email, password } = req.body
		const user = await UserModel.findOne({ email })
		if (!user) return 'Usuario no encontrado'
		const valid = isValidPassword(user, password)
		if (!valid) return 'Error de auteuticación'
		const token = generateToken(user)
		if (token) {
			return res
				.cookie('token', token, {
					httpOnly: true,
				})
				.send({ status: 'success', message: 'Autenticacion exitosa', token }) //token enviado a cookie y a front
		}
		await user.save()

		res.status(200).json({ message: 'Autenticacion exitosa', token })
	} catch (error) {
		res.status(500).json({ msg: `Error en loguearse: ${error}` })
	}
}
