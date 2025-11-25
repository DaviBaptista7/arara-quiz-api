import { database } from "../config/database.js"
import { env } from "../config/env.js"
import { Answer } from "./Answers.js"
import { Question } from "./Questions.js"
import { Ranking } from "./Ranking.js"
import { Theme } from "./Theme.js"
import { User } from "./User.js"

const models = { Answer, Question, Ranking, Theme, User }

User.hasMany(Answer, {
    foreignKey: 'userId',
    as: 'answers'
})

Answer.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
})

Question.hasMany(Answer, {
    foreignKey: 'questionId',
    as: 'answers'
})

Answer.belongsTo(Question, {
    foreignKey: 'questionId',
    as: 'question'
})

Ranking.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
    onDelete: "CASCADE"
})

User.hasOne(Ranking, {
    foreignKey: "userId",
    as: "ranking"
})

Question.belongsTo(Theme, {
    foreignKey: "themeId",
    as: "theme",
    onDelete: "CASCADE"
})

Theme.hasMany(Question, {
    foreignKey: 'themeId',
    as: 'questions'
})

if (env.nodeEnv === 'development') {
    database.sync({ alter: true })
        .then(() => console.log('✅ Modelos sincronizados'))
        .catch(err => console.error('❌ Erro ao sincronizar:', err))
}

export default models
