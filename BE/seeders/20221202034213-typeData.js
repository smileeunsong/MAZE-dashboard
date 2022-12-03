'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('type', [{
      name: 'hot'
    }, {
      name: 'cold'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('type', null, {});
  }
};

