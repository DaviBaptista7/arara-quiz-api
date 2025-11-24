import { makeThemeService } from "./theme.service.js"

export const makeThemeController = () => {
    const service = makeThemeService()

    const list = async (_request, response, next) => {
        try {
            const themes = await service.list()

            return response.json(themes)
        } catch (error) {
            return next(error)

        }
    }

    return { list }
}