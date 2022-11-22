'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: '박은송',
      phone: '01011112222',
      email: 'asdf@gamil.com',
      password: '1234',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: '김우진',
      phone: '01099998888',
      email: 'asbie@gmail.com',
      password: 'dasf3',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: '천송이',
      phone: '01012121212',
      email: 'hello@gmail.com',
      password: 'daheloo3',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: '장동건',
      phone: '01034343434',
      email: 'bye@gmail.com',
      password: 'ndeucse3',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
