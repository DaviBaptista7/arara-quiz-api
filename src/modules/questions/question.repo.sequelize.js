import { Question } from "../../models/Questions.js"

export const makeQuestionsRepoSequelize = () => {
    const findByTheme = async ({ themeId }) => {
        const questions = await Question.findAll({ where: { theme_id: themeId } })

        return questions.map(quest => quest.toJSON())
    }

    return { findByTheme }
}