const storeService = require('../services/storeService')

// 스토어 등록
const addStore = async (req, res) => {
  try {
    const userId = req.user.id;
    const { 
      storeName,
      storeAddress,
    } = req.body;

    const storeInfo = await storeService.addStore(userId, storeName, storeAddress);

    return res.status(201).json({
      message : 'STORE_CREATED',
      data : storeInfo
    })
  }
  catch (error) {
    return res.status(error.statusCode).json({
      message : error.message
    })
  }
}

module.exports = {
  addStore,
}