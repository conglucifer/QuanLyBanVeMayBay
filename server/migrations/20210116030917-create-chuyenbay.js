'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CHUYENBAY', {
      MaChuyenBay: {
        allowNull: false,
        type: Sequelize.STRING(10),
        primaryKey: true,
      },
      MaTuyenBay: {
        allowNull: false,
        type: Sequelize.STRING(10),
        onUpdate: 'CASCADE',
        references: {
          model: 'TUYENBAY',
          key: 'MaTuyenBay'
        }
      },
      NgayGio: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      ThoiGianBay: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CHUYENBAY');
  }
};
