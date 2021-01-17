'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PHIEUDATCHO', {
      MaPhieuDat: {
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
      MaHanhKhach: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        references: {
          model: 'HANHKHACH',
          key: 'MaHanhKhach'
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
      GiaTien: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      NgayDat: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PHIEUDATCHO');
  }
};
