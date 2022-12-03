const Sequelize = require('sequelize');

module.exports = class Store extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(30),
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Store',
      tableName: 'stores',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Store.belongsToMany(db.User, { through: 'user_store' });
    db.Store.hasMany(db.Order, { foreignKey: 'storeId', sourceKey: 'id' });
    db.Store.hasMany(db.Item, { foreignKey: 'storeId', sourceKey: 'id' });
    db.Store.hasMany(db.Option, { foreignKey: 'storeId', sourceKey: 'id' });
  }
};