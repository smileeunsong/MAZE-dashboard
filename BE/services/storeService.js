const storeDao = require('../models/storeDao');

const addStore = async (userId, storeName, storeAddress) => {
  const storeInfo = await storeDao.addStore(userId, storeName, storeAddress)

  return storeInfo;
}

module.exports = {
  addStore,
}