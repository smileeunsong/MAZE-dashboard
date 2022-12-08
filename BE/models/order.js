const Sequelize = require('sequelize');

module.exports = class Order extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      storeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      orderStoreMenuId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      optionId: {
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      UnitPrice: {
        type: Sequelize.DECIMAL,
      },
      pickup: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      orderNumber: {
        type: Sequelize.DECIMAL(14,0),
        allowNull: false,
      },
      guestNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      about: {
        type: Sequelize.TEXT,
      },
      eta: {
        type: Sequelize.INTEGER,
      },
      stateId: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      cancelReason: {
        type: Sequelize.TEXT,
      },
    }, {
      sequelize,
      timestamps: true,
      createdAt: 'time',
      underscored: true,
      modelName: 'Order',
      tableName: 'orders',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Order.belongsTo(db.Store, { foreignKey: 'storeId', targetKey: 'id' });
    db.Order.belongsTo(db.State, { foreignKey: 'stateId', targetKey: 'id' });
    db.Order.belongsTo(db.Option, { foreignKey: 'optionId', targetKey: 'id' });
    db.Order.belongsTo(db.Item, { foreignKey: 'orderStoreMenuId', targetKey: 'storeMenuId' });
  }
};

