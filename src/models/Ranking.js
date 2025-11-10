import { DataTypes } from 'sequelize';
import { database } from '../config/database.js';

export const Ranking = database.define('Ranking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, {
    tableName: 'rankings',
    timestamps: true, // Adiciona createdAt e updatedAt
    underscored: true // Usa snake_case no banco (created_at)
});
