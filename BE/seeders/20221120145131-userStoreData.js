'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_store', [{
      user_id: 1,
      store_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      user_id: 1,
      store_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      user_id: 2,
      store_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      user_id: 3,
      store_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      user_id: 4,
      store_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_store', null, {});
  }
};