import { DataTypes } from 'sequelize';
import { database } from '../config/database.js';

export const Theme = database.define('Theme', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            len: {
                args: [3, 100],
                msg: 'Nome deve ter entre 3 e 100 caracteres'
            }
        }
    },

}, {
    tableName: 'themes',
    timestamps: true, // Adiciona createdAt e updatedAt
    underscored: true // Usa snake_case no banco (created_at)
});