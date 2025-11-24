import { DataTypes } from 'sequelize'
import { database } from '../config/database.js'
import { User } from './User.js'

export const Ranking = database.define('Ranking', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
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
    }
}, {
    tableName: 'rankings',
    timestamps: true,
    underscored: true
})
