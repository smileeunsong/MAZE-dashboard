const router = require('express').Router();
const saleController = require('../controllers/saleController');
const { loginRequired } = require('../utils/auth');

// 월별
router.get('/data/monthly', loginRequired, saleController.getMonthlySales);

// 일별
router.get('/data/daily', loginRequired, saleController.getDailySales);

// 시간별
router.get('/data/hourly', loginRequired, saleController.getHourlySales);

// 시간당 메뉴별 판매량 (히트맵)
router.get('/data/heatmap', loginRequired, saleController.getHeatMapData);

module.exports = router