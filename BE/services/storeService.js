const storeDao = require('../models/storeDao');

const addStore = async (storeName, storeAddress) => {
  const storeInfo = await storeDao.addStore(storeName, storeAddress)

  return storeInfo;
}

module.exports = {
  addStore,
}