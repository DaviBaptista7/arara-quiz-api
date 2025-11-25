import { HttpError } from "../../utils/httpError.js";
import { makeThemeRepoSequelize } from "../themes/theme.repo.sequelize.js";
import { makeQuestionsRepoSequelize } from "./question.repo.sequelize.js";

export const makeQuestionsService = () => {
    const questionsRepo = makeQuestionsRepoSequelize()
    const themesRepo = makeThemeRepoSequelize()

    const findByTheme = async ({ themeId }) => {
        const theme = await themesRepo.findById({ id: themeId })


        if (!theme) {
            throw new HttpError("Theme not found", 404, "THEME_NOT_FOUND")
        }

        const found = await questionsRepo.findByTheme({ themeId })

        if (!found) {
            throw new HttpError("Questions not found", 404, "QUESTION_NOT_FOUND")
        }

        return found
    }

    return { findByTheme }
}