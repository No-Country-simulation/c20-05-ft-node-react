import { UserCuidador } from "../persistencia/models/userCuidador.js";
import { UserModel } from "../persistencia/models/userCliente.js";
import { serviceType } from "../persistencia/models/services.js";
import { createHash, generateToken, isValidPassword } from "../utils/utils.js";
import { entorno } from "../config/config.js";

// @desc    Register a new user
// @route   POST /api/v1/createuser
// @access  Public
export const createUser = async (req, res, next) => {
	try {
		const { first_name, last_name, email, password } = req.body;

		// Validate input
		if (!first_name || !last_name || !email || !password) {
			res.status(400);
			throw new Error("All fields are required");
		}

		// Check if user already exists
		const existingUser = await UserModel.findOne({ email });
		if (existingUser) {
			res.status(400);
			throw new Error("User already exists");
		}

		// Hash the password
		const hashedPassword = createHash(password);

		// Create the user
		const newUser = await UserModel.create({
			first_name,
			last_name,
			email,
			password: hashedPassword,
		});

		// Generate token
		const userWithoutPassword = newUser.toObject();
		delete userWithoutPassword.password;

		// Send response
		res.status(201).json({ user: userWithoutPassword });
	} catch (error) {
		next(error);
	}
};

// @desc    Auth user & get token
// @route   POST /api/v1/login
// @access  Public
export const login = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		// Validate input
		if (!email || !password) {
			res.status(400);
			throw new Error("Invalid Credentials");
		}
		// Find the user in UserModel
		let user = await UserModel.findOne({ email });
		console.log(user);

		// If user not found in UserModel, search in UserCuidador
		if (!user) {
			user = await UserCuidador.findOne({ email });
		}

		// If user not found in UserModel, search in UserCuidador
		if (!user) {
			user = await UserCuidador.findOne({ email });
			console.log(user);
		}

		// If user not found in either model, throw error
		if (!user) {
			res.status(401);
			throw new Error("Invalid email or password");
		}

		// Verify password
		const isValid = await isValidPassword(user, password);
		if (!isValid) {
			res.status(401);
			throw new Error("Invalid email or password");
		}

		// Generate token
		const token = generateToken(user);

		const userWithoutPassword = user.toObject();
		delete userWithoutPassword.password;

		// Send response
		res.cookie("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV !== "development",
			sameSite: "strict",
			maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
		});
		res.status(200).json({ user: userWithoutPassword });
	} catch (error) {
		next(error);
	}
};

// @desc    Logout user
// @route   POST /api/v1/logout
// @access  Public
export const logout = async (req, res, next) => {
	try {
		res.clearCookie("token", {
			httpOnly: true,
			secure: entorno.NODE_ENV !== "development",
			sameSite: "strict",
			expires: new Date(0),
			path: "/",
		});
		res.status(200).json({ message: "User logged out successfully" });
	} catch (error) {
		next(error);
	}
};

// const createServices = async () => {
// 	const services = [
// 		{ nombre: "guardería", precio: 100, duracion: "1 hora" },
// 		{ nombre: "hospedaje", precio: 200, duracion: "12 horas" },
// 		{ nombre: "cuidado a domicilio", precio: 200, duracion: "12 horas" },
// 		{ nombre: "alimentación de mascotas", precio: 200, duracion: "2 horas" },
// 		{ nombre: "paseo de mascotas", precio: 200, duracion: "2 horas" },
// 	];

// 	await serviceType.insertMany(services);
// };

// createServices();

export const createCuidador = async (req, res, next) => {
	try {
		const {
			first_name,
			last_name,
			email,
			password,
			province,
			city,
			address,
			phone,
			zipCode,
			birthdate,
			prefered_name,
			preferencePet,
			typePreferencePet,
			aboutMe,
			aboutYourHome,
			typeService,
			availability,
			bathroomServicePrice,
			pricePerVet,
			specialties,
			experience,
			profilePicture,
			images,
			networks,
		} = req.body;

		// Validate input
		if (!first_name || !last_name || !email || !password || !profilePicture) {
			res.status(400);
			throw new Error(
				"First name, last name, email, password, and profile picture are required",
			);
		}

		// Check if user already exists
		const existingUser = await UserCuidador.findOne({ email });
		if (existingUser) {
			res.status(400);
			throw new Error("User already exists");
		}

		// Validate aboutMe character limit
		if (aboutMe && aboutMe.length > 300) {
			res.status(400);
			throw new Error("The 'aboutMe' field cannot exceed 300 characters");
		}
		// Buscar todos los servicios seleccionados por nombre
		const services = await serviceType.find({ nombre: { $in: typeService } });
		if (services.length === 0) {
			res.status(400);
			throw new Error("No services found");
		}

		// Obtener los ObjectId de los servicios encontrados
		const serviceIds = services.map((service) => service._id);

		// Hash the password
		const hashedPassword = createHash(password);

		// Create the new carer (cuidador)
		const newCuidador = await UserCuidador.create({
			first_name,
			last_name,
			email,
			password: hashedPassword,
			province,
			city,
			address,
			phone,
			zipCode,
			birthdate,
			prefered_name,
			preferencePet,
			typePreferencePet,
			aboutMe,
			aboutYourHome,
			typeService: serviceIds,
			availability,
			bathroomServicePrice,
			pricePerVet,
			specialties,
			experience,
			profilePicture,
			images,
			networks,
		});

		// Generate token
		const userWithoutPassword = newCuidador.toObject();
		delete userWithoutPassword.password;

		// Send response
		res.status(201).json({ user: userWithoutPassword });
	} catch (error) {
		next(error);
	}
};
