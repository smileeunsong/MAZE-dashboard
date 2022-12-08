const Sequelize = require('sequelize');

module.exports = class Option extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      storeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(10)
      },
      price: {
        type: Sequelize.DECIMAL,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Option',
      tableName: 'options',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Option.belongsTo(db.Store, { foreignKey: 'storeId', targetKey: 'id' });
    db.Option.hasMany(db.Order, { foreignKey: 'optionId', sourceKey: 'id' });
  }
};
