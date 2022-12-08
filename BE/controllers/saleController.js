const saleService = require('../services/saleService');

const getMonthlySales = async (req, res) => {
  const userId = req.user.id;
  
  try {
    const storeId = await saleService.getStoreIdByUserId(userId);
    const data = await saleService.getMonthlySales(storeId);
  
    res.status(200).json({
      message : 'SUCCESS',
      data : data
    })
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

const getDailySales = async (req, res) => {
  const userId = req.user.id;
  const { targetDate } = req.query;

  try {  
    const storeId = await saleService.getStoreIdByUserId(userId);
    const data = await saleService.getDailySales(storeId, targetDate);

    res.status(200).json({
      message : 'SUCCESS',
      data : data
    })
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

const getHourlySales = async (req, res) => {
  const userId = req.user.id;

  try {
    const storeId = await saleService.getStoreIdByUserId(userId);
    const data = await saleService.getHourlySales(storeId);

    res.status(200).json({
      message : 'SUCCESS',
      data : data
    })
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

const getHeatMapData = async (req, res) => {
  const userId = req.user.id;
  const { startDate, finishDate } = req.query;

  try {
    const storeId = await saleService.getStoreIdByUserId(userId);
    const data = await saleService.getHeatMapData(storeId, startDate, finishDate);

    res.status(200).json({
      message: 'SUCCESS',
      data : data
    })
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

module.exports = {
  getMonthlySales,
  getDailySales,
  getHourlySales,
  getHeatMapData,
}
