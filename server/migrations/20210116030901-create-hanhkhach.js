'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('HANHKHACH', {
      MaHanhKhach: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TenHanhKhach: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      CMND: {
        allowNull: false,
        type: Sequelize.STRING(12),
      },
      DienThoai: {
        allowNull: false,
        type: Sequelize.STRING(12),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('HANHKHACH');
  }
};
