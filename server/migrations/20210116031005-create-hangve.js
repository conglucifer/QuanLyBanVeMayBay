'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('HANGVE', { 
      MaHangVe: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      TenHangVe: {
        allowNull: false,
        type: Sequelize.STRING(100),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('HANGVE');
  }
};
