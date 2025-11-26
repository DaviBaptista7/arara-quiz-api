import { DataTypes } from 'sequelize'
import { database } from '../config/database.js'
import { Theme } from './Theme.js'

export const Question = database.define('Question', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  correctAnswer: {
    type: DataTypes.INTEGER(),
    allowNull: false,
  },
  alternatives: {
    type: DataTypes.JSON,
    allowNull: false
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false
  },
  difficulty: {
    type: DataTypes.ENUM('easy', 'medium', 'hard'),
    allowNull: false
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 10
    }
  },
  explanation: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  themeId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'theme_id',
    references: {
      model: Theme,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'questions',
  timestamps: true,
  underscored: true
})
