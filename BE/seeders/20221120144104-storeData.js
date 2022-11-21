'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stores', [{
      name: '스타벅스',
      address: '하남시 12로',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: '커피빈',
      address: '하남시 15로',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: '카페베네',
      address: '하남시 123로',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: '빽다방',
      address: '하남시 97로',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
