import { makeQuestionsService } from "./question.service.js"

export const makeQuestionsController = () => {
    const service = makeQuestionsService()

    const list = async (request, response, next) => {
        try {
            return response.json(await service.findByTheme({ themeId: request.params.themeId }));
        }
        catch (error) {
            return next(error);
        }
    }

    return { list }
}