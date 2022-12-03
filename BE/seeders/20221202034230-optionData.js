'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('options', [{
      store_id: 1,
      name: '1 샷 추가',
      price: 500,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      store_id: 1,
      name: '2 샷 추가',
      price: 1000,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      store_id: 1,
      name: '3 샷 추가',
      price: 1500,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      store_id: 1,
      name: '휘핑크림 추가',
      price: 500,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      store_id: 1,
      name: '오트밀 우유',
      price: 500,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      store_id: 1,
      name: '시나몬 추가',
      price: 500,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('options', null, {});
  }
};
