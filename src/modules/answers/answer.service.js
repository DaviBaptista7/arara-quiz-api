import { HttpError } from "../../utils/httpError.js";
import { makeQuestionsRepoSequelize } from "../questions/question.repo.sequelize.js";
import { makeAnswerRepoSequelize } from "./answers.repo.sequelize.js";

export const makeAnswerService = () => {
    const answerRepo = makeAnswerRepoSequelize();
    const questionRepo = makeQuestionsRepoSequelize();

    const createOrUpdate = async ({ sessionId, questionId, answer }) => {

        const question = await questionRepo.findById({ id: questionId });

        if (!question) {
            throw new HttpError('Question not found', 400);
        }

        if (!Number.isInteger(answer)) {
            throw new HttpError("Answer must be an integer", 400);
        }

        if (answer < 0 || answer >= question.alternatives.length) {
            throw new HttpError(
                `Invalid answer index: ${answer}. Must be between 0 and ${question.alternatives.length - 1}`,
                400
            );
        }

        return await answerRepo.create({ sessionId, questionId, answer });
    }

    return { createOrUpdate };
}