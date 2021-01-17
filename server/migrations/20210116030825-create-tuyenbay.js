'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TUYENBAY', {
      MaTuyenBay: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      SanBayDi: {
        allowNull: false,
        type: Sequelize.STRING(10),
        onUpdate: 'CASCADE',
        references: {
          model: 'SANBAY',
          key: 'MaSanBay'
        }
      },
      SanBayDen: {
        allowNull: false,
        type: Sequelize.STRING(10),
        onUpdate: 'CASCADE',
        references: {
          model: 'SANBAY',
          key: 'MaSanBay'
        }
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TUYENBAY');
  }
};
