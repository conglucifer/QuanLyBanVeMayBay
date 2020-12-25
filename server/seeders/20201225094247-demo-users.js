'use strict';
const path = require('path');
const bcrypt = require('bcrypt');
const { User, Role } = require(path.join(__dirname, '../models'));

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
    const name = 'Admin';
    const email = 'admin@mail.com';
    const password = await bcrypt.hash('123456789', await bcrypt.genSalt(8));
    await queryInterface.bulkInsert('Users', [{name, email, password,}]);
    const user = await User.findOne({
      where: { email },
    });
    const adminRole = await Role.findOne({where:{name: 'Admin'}});
    await queryInterface.bulkInsert('RoleUser', [{
      userId: user.id,
      roleId: adminRole.id,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('RoleUser', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
