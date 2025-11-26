import { makeResultsService } from "./results.services.js";

export const makeResultsController = () => {
    const resultsService = makeResultsService()

    const getScoreByTheme = async (request, response, next) => {
        try {
            const { sessionId } = request.session;
            const { themeId } = request.params;

            const results = await resultsService.getScoreByTheme(sessionId, themeId);

            return response.json(results);
        } catch (error) {
            return next(error);
        }
    };

    const getTotalScore = async (request, response, next) => {
        try {
            const { sessionId } = request.session;

            const results = await resultsService.getTotalScore(sessionId);

            return response.json(results);
        } catch (error) {
            return next(error);
        }
    };

    return {
        getScoreByTheme,
        getTotalScore
    };
};