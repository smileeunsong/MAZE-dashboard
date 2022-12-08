const orderList = require('./data/wecode');

// 객체를 동결시켜 enum처럼 사용 가능
const PICKUP = Object.freeze({
  매장 : 0,
  포장 : 1
})

// db 테이블에 맞는 데이터로 변환하여 data라는 변수에 할당
const data = [];
for (let i = 0; i < orderList.length; i++) {
  const obj = {};
  obj.store_id = 1; // 현재 밸런스포인트 매장 데이터만 저장
  obj.order_store_menu_id = orderList[i].items[0].mID;
  obj.quantity = orderList[i].items[0].num;
  obj.unit_price = orderList[i].items[0].won; // 현재 추가 옵션 없이 음료 가격만 저장
  obj.pickup = PICKUP[orderList[i].items[0].type];
  obj.order_number = orderList[i].orderID;
  obj.guest_number = orderList[i].guestID;
  obj.about = orderList[i].about;
  obj.eta = orderList[i].ETA;
  obj.state_id = orderList[i].state;
  obj.cancel_reason = orderList[i].cancelReason
  obj.time = new Date(orderList[i].day);
  obj.updated_at = new Date();
  data.push(obj);
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};

