import { Router } from 'express'
import passport from 'passport'
import { createUser, login } from '../controllers/userController.js'

const userRouter = Router()

userRouter.post('/createuser', createUser)

userRouter.post('/login', login)

export default userRouter
