'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TINHTRANGVE', {
      MaTinhTrangVe: {
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
      MaHangVe: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        references: {
          model: 'HANGVE',
          key: 'MaHangVe'
        }
      },
      SoLuongGhe: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      SoLuongGheTrong: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      SoGheDat: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TINHTRANGVE');
  }
};
