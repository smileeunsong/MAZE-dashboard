const orderList = require('./data/wecode');

// mID 중복 제거된 배열 생성
const uniqueArr = []
for (let i = 0; i < orderList.length; i++) {
  const [ item ] = orderList[i].items;
  const idList = uniqueArr.map(el => el.mID);
  
  if (!idList.includes(orderList[i].items[0].mID)) {
    uniqueArr.push(item);
  }
}

// db 테이블에 맞는 데이터로 변환하여 data라는 변수에 할당
const data = [];
for (let i = 0; i < uniqueArr.length; i++) {
  const obj = {};
  obj.store_id = 1; // 현재 밸런스포인트 매장 데이터만 저장
  obj.store_menu_id = uniqueArr[i].mID;
  obj.name = uniqueArr[i].name;
  obj.price = uniqueArr[i].won;
  obj.created_at = new Date();
  obj.updated_at = new Date();
  data.push(obj);
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null, {});
  }
};
