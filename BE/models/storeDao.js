const { Store } = require('../models');

const addStore = async (storeName, storeAddress) => {
  const store = await Store.create({
    name : storeName,
    address : storeAddress
  })

  return store.dataValues;
}

module.exports = {
  addStore,
}