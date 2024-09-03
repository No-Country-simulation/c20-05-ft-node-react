import { Router } from 'express'
import { createUser, login, logout } from '../controllers/userController.js'

const userRouter = Router()

userRouter.post('/createuser', createUser)

userRouter.post('/login', login)

userRouter.post("/logout", logout)

export default userRouter
