'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CT_DOANHTHUTHANG', {
      MaCTDoanhThuThang: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      MaDoanhThuThang: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        references: {
          model: 'DOANHTHUTHANG',
          key: 'MaDoanhThuThang'
        }
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
      SoVe: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      TyLe: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
      },
      DoanhThu: {
        allowNull: false,
        type: Sequelize.DECIMAL(15, 2),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CT_DOANHTHUTHANG');
  }
};
