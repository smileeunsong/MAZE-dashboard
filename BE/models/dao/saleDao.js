const { sequelize } = require('../../models');

const getStoreIdByUserId = async (userId) => {
  const [ result ] = await sequelize.query(`
    SELECT
      store_id AS storeId
    FROM user_store
    WHERE user_id = ${userId};`
  );

  return result[0].storeId;
}

// 지난 1년 간 월별 매출 데이터
const getMonthlySales = async (storeId) => {
  const [ result ] = await sequelize.query(`
    SELECT
      JSON_ARRAYAGG(salesObj) AS data
    FROM (
      SELECT
        JSON_OBJECT('month', yearMonth, 'salesQty', SUM(quantity), 'salesAmount', SUM(sum)) AS salesObj
      FROM (
        SELECT
          DATE_FORMAT(time, '%y년 %m월') AS yearMonth,
          quantity,
          (quantity * unit_price) AS sum
        FROM orders
        WHERE store_id = ${storeId} AND time BETWEEN DATE_ADD(DATE_ADD(LAST_DAY(NOW()), INTERVAL -1 YEAR), INTERVAL 1 DAY) AND NOW()
      ) AS A
      GROUP BY yearMonth
    ) AS B
  `)
  
  return result[0].data;
}

// 선택한 날짜의 매출 데이터
const getDailySales = async (storeId, targetDate) => {
  const [ result ] = await sequelize.query(`
    SELECT
      JSON_ARRAYAGG(salesObj) AS data
    FROM (
      SELECT
        JSON_OBJECT('date', date, 'salesQty', SUM(quantity), 'salesAmount', SUM(sum)) AS salesObj
      FROM (
        SELECT
          DATE_FORMAT(time, '%d') AS date,
          quantity,
          (quantity * unit_price) AS sum
        FROM orders
        WHERE store_id = ${storeId} AND time BETWEEN '${targetDate}-00:00' AND DATE_ADD('${targetDate}-00:00', INTERVAL 1 day)
      ) AS A
      GROUP BY date
      ORDER BY date ASC
    ) AS B
  `)

  return result[0].data;
}

// 지난 30일 간 시간별 매출 데이터
const getHourlySales = async (storeId) => {
  const [ result ] = await sequelize.query(`
    SELECT
      JSON_ARRAYAGG(salesObj) AS data
    FROM (
      SELECT
        JSON_OBJECT('hour', hour, 'salesQty', SUM(quantity), 'salesAmount', SUM(sum)) AS salesObj
      FROM (
        SELECT
          DATE_FORMAT(time, '%H') AS hour,
          quantity,
          (quantity * unit_price) AS sum
        FROM orders
        WHERE store_id = ${storeId} AND time BETWEEN DATE_ADD(NOW(), INTERVAL -1 MONTH) AND NOW()
      ) AS A
      GROUP BY hour
      ORDER BY hour ASC
    ) AS B
  `)

  return result[0].data;
}

// 선택한 기간의 시간당 메뉴별 판매량 데이터
const getHeatMapData = async (storeId, startDate, finishDate) => {
  const [ result ] = await sequelize.query(`
    SELECT
      id,
      JSON_ARRAYAGG(sum) as data
    FROM (
      SELECT
        id,
        JSON_OBJECT('x', hour, 'y', SUM(quantity)) AS sum
      FROM (
        SELECT
          i.name AS id,
          DATE_FORMAT( time, '%H') AS hour,
          o.quantity AS quantity
        FROM orders AS o
        JOIN items AS i ON o.order_store_menu_id = i.store_menu_id
        WHERE o.store_id = ${storeId} AND time BETWEEN '${startDate}-00:00' AND '${finishDate}-23:59:59'
      ) AS A
      GROUP BY id, hour
      ORDER BY hour ASC
    ) AS B
    GROUP BY id;`
  )

    return result;
}

module.exports = {
  getStoreIdByUserId,
  getMonthlySales,
  getDailySales,
  getHourlySales,
  getHeatMapData,
}
