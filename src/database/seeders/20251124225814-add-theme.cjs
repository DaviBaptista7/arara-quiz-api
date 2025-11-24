'use strict'

const { v4: uuidv4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date()

    await queryInterface.bulkInsert(
      'themes',
      [
        {
          id: uuidv4(),
          name: 'História de Araraquara',
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          name: 'Time da Ferroviária',
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          name: 'Boulevard dos Oitis',
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          name: 'Museu ferroviário',
          created_at: now,
          updated_at: now
        },
        {
          id: uuidv4(),
          name: 'Folclore',
          created_at: now,
          updated_at: now
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('themes', null, {})
  }
}
