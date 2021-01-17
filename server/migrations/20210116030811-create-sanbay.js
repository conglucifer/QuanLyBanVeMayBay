'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SANBAY', {
      MaSanBay: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      TenSanBay: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SANBAY');
  }
};
