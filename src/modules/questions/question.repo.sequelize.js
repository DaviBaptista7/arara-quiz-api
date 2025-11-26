import { Question } from "../../models/Questions.js"
import { Theme } from "../../models/Theme.js"

export const makeQuestionsRepoSequelize = () => {
    const findByTheme = async ({ themeId }) => {
        const questions = await Question.findAll({
            where: { theme_id: themeId },
            include: {
                model: Theme,
                as: "theme",
                attributes: ["id", "name"]
            }
        })

        return questions.map(quest => quest.toJSON())
    }

    const findById = async ({ id }) => {
        const question = await Question.findByPk(id);
        return question ? question.toJSON() : null;
    }

    return { findByTheme,findById }
}