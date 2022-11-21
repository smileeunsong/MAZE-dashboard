const router = require('express').Router();
const storeController = require('../controllers/storeController');

// 스토어 등록
router.post('/register', storeController.addStore);

module.exports = router