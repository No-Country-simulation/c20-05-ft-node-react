import { Router } from "express";
import {
	createUser,
	login,
	logout,
	createCuidador,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/createuser", createUser);

userRouter.post("/createcarer", createCuidador);

userRouter.post("/login", login);

userRouter.post("/logout", logout);

userRouter.post("/forgot-password"); // Envía un enlace de restablecimiento de contraseña al email del usuario.

userRouter.post("/reset-password"); // Restablece la contraseña utilizando un token.

userRouter.get("/me"); // Devuelve la información del perfil del usuario autenticado.

userRouter.put("/me"); // Actualiza la información del perfil del usuario autenticado.

userRouter.delete("/me"); // Elimina la cuenta del usuario autenticado.

userRouter.get("/admin/users"); // Obtiene una lista de todos los usuarios.

userRouter.delete("admin/users/:uid"); // Elimina un usuario específico.

userRouter.get("/carers/nearby"); // Obtiene una lista de todos los cuidadores cercanos.

export default userRouter;
