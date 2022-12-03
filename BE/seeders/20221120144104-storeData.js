const orderList = require('./data/wecode');

// 스토어명 중복 제거된 배열 생성
const listArr = orderList.map(el => el.storeName)

const set = new Set(listArr);
const uniqueArr = [...set];

// db 테이블에 맞는 데이터로 변환하여 data라는 변수에 할당
const data = [];
for (let i = 0; i < uniqueArr.length; i++) {
  const obj = {};
  obj.name = uniqueArr[i];
  obj.created_at = new Date();
  obj.updated_at = new Date();
  data.push(obj);
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stores', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
