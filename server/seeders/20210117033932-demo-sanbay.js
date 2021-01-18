'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('SANBAY', [
      {MaSanBay: 'HAN', TenSanBay: 'Nội Bài'},
      {MaSanBay: 'SGN', TenSanBay: 'Tân Sơn Nhất'},
      {MaSanBay: 'VCS', TenSanBay: 'Côn Đảo'},
      {MaSanBay: 'UIH', TenSanBay: 'Phù Cát'},
      {MaSanBay: 'DAD', TenSanBay: 'Đà Nẵng'},
      {MaSanBay: 'HPH', TenSanBay: 'Cát Bi'},
      {MaSanBay: 'CXR', TenSanBay: 'Cam Ranh'},
      {MaSanBay: 'DLI', TenSanBay: 'Liên Khương'},
      {MaSanBay: 'VII', TenSanBay: 'Vinh'},
      {MaSanBay: 'HUI', TenSanBay: 'Phú Bài'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SANBAY', null, {});
  }
};
