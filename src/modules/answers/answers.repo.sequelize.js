import { Answer } from "../../models/Answers.js";
import { Question } from "../../models/Questions.js";

export const makeAnswerRepoSequelize = () => {
    const create = async ({ sessionId, questionId, answer }) => {
        // 1. Primeiro verificamos se já existe uma resposta para esta sessão e pergunta
        const existingAnswer = await Answer.findOne({
            where: { userId: sessionId, questionId }
        });

        let targetId;

        if (existingAnswer) {
            // Se já existe, ATUALIZAMOS a resposta
            await existingAnswer.update({ answer });
            targetId = existingAnswer.id;
        } else {
            // Se não existe, CRIAMOS uma nova
            const newAnswer = await Answer.create({ userId: sessionId, questionId, answer });
            targetId = newAnswer.id;
        }

        // 2. Buscamos o registro completo com as associações (Lógica original mantida)
        const answerRecord = await Answer.findByPk(targetId, {
            include: [
                {
                    model: Question,
                    as: 'question',
                    attributes: ['explanation']
                }
            ]
        })
        return answerRecord ? answerRecord.toJSON() : null
    }

    // ... O restante do arquivo (findBySession, findById, etc) permanece igual
    const findBySession = async (sessionId) => {
        // ... (seu código original aqui)
        const answers = await Answer.findAll({
            where: { userId: sessionId },
            include: [
                {
                    model: Question,
                    as: 'question',
                    attributes: ['id', 'question', 'correctAnswer', 'themeId', 'alternatives', 'score']
                } //correctAnswer //question
            ],
        });
        return answers.map(a => a.toJSON());
    }

    const findBySessionAndTheme = async (sessionId) => {
        // ... (seu código original aqui)
        const answers = await Answer.findAll({
            where: { userId: sessionId },
            include: [
                {
                    model: Question,
                    as: 'question',
                    attributes: ['id', 'question', 'correctAnswer', 'alternatives', 'score']
                } //correctAnswer //question
            ],
        });
        return answers.map(a => a.toJSON());
    }

    const findById = async (id) => {
        // ... (seu código original aqui)
        const answer = await Answer.findByPk(id, {
            include: [
                {
                    model: Question,
                    as: 'question',
                    attributes: ['id', 'question', 'correctAnswer', 'alternatives', 'score']
                }//text
            ]
        });
        return answer ? answer.toJSON() : null;
    }

    const deleteBySession = async (sessionId) => {
        return await Answer.destroy({ where: { userId: sessionId } });
    }

    const countBySession = async (sessionId) => {
        return await Answer.count({ where: { userId: sessionId } });
    }

    const isSessionComplete = async (sessionId) => {
        const totalQuestions = await Question.count();
        const answeredQuestions = await countBySession(sessionId);

        return {
            total: totalQuestions,
            answered: answeredQuestions,
            isComplete: answeredQuestions >= totalQuestions,
            percentage: totalQuestions === 0 ? 0 : Math.round((answeredQuestions / totalQuestions) * 100)
        };
    }

    return {
        create,
        findById,
        deleteBySession, findBySessionAndTheme,
        countBySession,
        isSessionComplete,
        findBySession
    }
}