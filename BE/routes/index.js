const router = require('express').Router();
const userRouter = require('./userRouter');
const storeRouter = require('./storeRouter');
const saleRouter = require('./saleRouter');

router.use('/users', userRouter);
router.use('/stores', storeRouter);
router.use('/sales', saleRouter);

module.exports = router;