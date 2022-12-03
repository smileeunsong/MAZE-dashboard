'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('State', [{
      id: 0,
      name: '접수 대기 (결제완료)',
    }, {
      id: 1,
      name: '접수 완료',
    }, {
      id: 2,
      name: '준비 완료',
    }, {
      id: 3,
      name: '수령 완료',
    }, {
      id: 4,
      name: '결제 취소 (유저가 진행한 취소)',
    }, {
      id: 5,
      name: `접수 취소 (점주 혹은 서버가 '접수 대기' 상태의 주문을 취소함)`
    }, {
      id: 6,
      name: `접수 취소 (점주 혹은 서버가 '접수 완료' 상태의 주문을 취소함)`
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('State', null, {});
  }
};

