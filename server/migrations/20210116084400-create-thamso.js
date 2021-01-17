'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('THAMSO', {
      ThoiGianBayToiThieu: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      SoSanBayTrungGianToiDa: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ThoiGianDungToiThieu: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ThoiGianDungToiDa: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      TGChamNhatDatVe: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      TGChamNhatHuyDatVe: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('THAMSO');
  }
};
