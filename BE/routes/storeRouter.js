const router = require('express').Router();
const storeController = require('../controllers/storeController');
const { loginRequired } = require('../utils/auth');

// 스토어 등록
router.post('/register', loginRequired, storeController.addStore);

module.exports = router