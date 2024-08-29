import { UserModel } from "../persistencia/models/userCliente.js";
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
      throw new Error("Email and password are required");
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
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      res.status(400);
      throw new Error("Email and password are required");
    }

    // Find the user
    const user = await UserModel.findOne({ email });
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
		res.clearCookie("token",{
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