import { makeAnswerRepoSequelize } from "../answers/answers.repo.sequelize.js";

export const makeResultsService = () => {
    const answerRepository = makeAnswerRepoSequelize()

    const calculateScore = (userAnswers) => {
        return userAnswers.reduce((totalScore, answerRecord) => {
            const questionData = answerRecord.question;
            const userAnswerIndex = answerRecord.answer;
            const correctAnswerIndex = questionData.correctAnswer;

            const isCorrect = (userAnswerIndex === correctAnswerIndex);

            return totalScore + (isCorrect ? questionData.score : 0);
        }, 0);
    };

    const getScoreByTheme = async (sessionId, themeId) => {
        const userAnswers = await answerRepository.findBySession(sessionId, themeId);


        const themeAnswers = userAnswers.filter(answer => answer.question.themeId === themeId)


        const totalScore = calculateScore(themeAnswers);

        return {
            sessionId,
            themeId,
            totalScore,
            totalAnswered: userAnswers.length // Informação útil
        };
    };


    const getTotalScore = async (sessionId) => {
        const userAnswers = await answerRepository.findBySession(sessionId);

        const totalScore = calculateScore(userAnswers);

        return {
            sessionId,
            totalScore,
            totalAnswered: userAnswers.length // Informação útil
        };
    };

    return {
        getScoreByTheme,
        getTotalScore,
    };
};