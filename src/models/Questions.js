import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export const User = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    answers: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            len: {
                args: [3, 100],
                msg: ' deve ter entre 3 e 100 caracteres'
            } 
        }
    },

    alternatives: {
        type: DataTypes.JSON,
        allowNull: false,

    },

    question: {
        type: DataTypes.VARCHAR,
        allowNull: false,
    },

    difficulty: {
        type: DataTypes.VARCHAR,
        allowNull: false,
    },

    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    explanation: {
        type: DataTypes.VARCHAR,
        allowNull: false,
    },
}, {
    tableName: 'themes',
    timestamps: true, // Adiciona createdAt e updatedAt
    underscored: true // Usa snake_case no banco (created_at)
});

