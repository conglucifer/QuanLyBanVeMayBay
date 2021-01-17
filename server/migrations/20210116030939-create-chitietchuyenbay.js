'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CHITIETCHUYENBAY', {
      MaChiTietChuyenBay: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      MaChuyenBay: {
        allowNull: false,
        type: Sequelize.STRING(10),
        onUpdate: 'CASCADE',
        references: {
          model: 'CHUYENBAY',
          key: 'MaChuyenBay'
        }
      },
      SanBayTrungGian: {
        allowNull: false,
        type: Sequelize.STRING(10),
        onUpdate: 'CASCADE',
        references: {
          model: 'SANBAY',
          key: 'MaSanBay'
        }
      },
      ThoiGianDung: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      GhiChu: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CHITIETCHUYENBAY');
  }
};
