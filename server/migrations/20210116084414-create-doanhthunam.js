'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DOANHTHUNAM', {
      MaDoanhThuNam: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Nam: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      TongDoanhThuNam: {
        allowNull: false,
        type: Sequelize.DECIMAL(15,2),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DOANHTHUNAM');
  }
};
