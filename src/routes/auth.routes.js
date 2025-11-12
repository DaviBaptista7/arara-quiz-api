import { Router } from "express"
import { validate } from "../middlewares/validate.js"
import { createUserSchema, LoginUserSchema } from "../modules/users/user.schemas.js"
import { makeUserController } from "../modules/users/user.controller.js"

export const authRouter = () => {
    const router = Router()
    const ctrl = makeUserController()

    router.post("/register", validate({ body: createUserSchema }), ctrl.register)
    router.post("/login", validate({ body: LoginUserSchema}), ctrl.login)
    //  Protegiso dentro do controle (array handler)
    router.get("/me", ctrl.me)

    return router
}