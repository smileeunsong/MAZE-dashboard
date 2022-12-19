const Sequelize = require('sequelize');

module.exports = class Item extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      storeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      storeMenuId : {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      typeId: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      discountRate: {
        type: Sequelize.DECIMAL(4, 2),
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Item',
      tableName: 'items',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Item.belongsTo(db.Store, { foreignKey: 'storeId', targetKey: 'id' });
    db.Item.belongsTo(db.Type, { foreignKey: 'typeId', targetKey: 'id' });
    db.Item.hasMany(db.Order, { foreignKey: 'orderStoreMenuId', sourceKey: 'storeMenuId' });
  }
};

