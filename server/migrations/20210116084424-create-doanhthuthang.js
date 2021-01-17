'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DOANHTHUTHANG', {
      MaDoanhThuThang: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Thang: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      MaDoanhThuNam: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        references: {
          model: 'DOANHTHUNAM',
          key: 'MaDoanhThuNam'
        }
      },
      SoChuyenBay: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      TyLe: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
      },
      TongDoanhThuThang: {
        allowNull: false,
        type: Sequelize.DECIMAL(15, 2),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DOANHTHUTHANG');
  }
};
