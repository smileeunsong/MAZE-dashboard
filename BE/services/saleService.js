const saleDao = require('../models/dao/saleDao');

const getStoreIdByUserId = async (userId) => {
  const storeId = await saleDao.getStoreIdByUserId(userId);

  if (!storeId) {
    const error = new Error('NO_STORE');
    error.statusCode = 404;

    throw error
  } 

  return storeId;
}

const getMonthlySales = async (storeId) => {
  return await saleDao.getMonthlySales(storeId);
}

const getDailySales = async (storeId, targetDate) => {
  return await saleDao.getDailySales(storeId, targetDate);
}

const getHourlySales = async (storeId) => {
  return await saleDao.getHourlySales(storeId);
}

const getHeatMapData = async (storeId, startDate, finishDate) => {
  return await saleDao.getHeatMapData(storeId, startDate, finishDate);
}

module.exports = {
  getStoreIdByUserId,
  getMonthlySales,
  getDailySales,
  getHourlySales,
  getHeatMapData,
}