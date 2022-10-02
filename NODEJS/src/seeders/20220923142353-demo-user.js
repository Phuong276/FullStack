'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName:'Phuong',
      lastName: 'Vu Duc',
      address: 'Thua Thien Hue',
      gender: 1,
      typeRole: 'ROLE',
      keyRole:'R1',
      createAt: new Date(),
      updateAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
