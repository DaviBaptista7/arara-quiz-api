import { ensureAuth } from "../../middlewares/auth.js"
import { makeUserService } from "./user.service.js"

export const makeUserController = () => {
    const service = makeUserService()

    const register = async (request, response, next) => {
        try {
            const { name, email, password, nickname } = request.body

            const user = await service.register({ name, email, password, nickname })

            return response.status(201).json({
                id: user.id,
                name: user.name,
                email: user.email,
                nickname: user.nickname
            })
        } catch (error) {
            return next(error)
        }

    }

    const login = async (request, response, next) => {
        try {
            const { email, password } = request.body
            const tokens = await service.login({ email, password })

            return response.json(tokens)
        } catch (error) {
            return next(error)

        }
    }
    // Array handler: middleware + handler
    const me = [ensureAuth, async (request, response) => response.json({ userId: request.user.id })]

    return { register, login, me }
}