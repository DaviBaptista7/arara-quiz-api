import { DataTypes } from 'sequelize'
import { database } from '../config/database.js'
import { Question } from './Questions.js'
import { User } from './User.js'

export const Answer = database.define('Answer', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    answer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 3
        }
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            model: User,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    questionId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'question_id',
        references: {
            model: Question,
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'answers',
    timestamps: true,
    underscored: true
})
