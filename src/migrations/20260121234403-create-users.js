'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('users', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
    });

  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('users');
  }
};
