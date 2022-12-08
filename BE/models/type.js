const Sequelize = require('sequelize');

module.exports = class Type extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(10),
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Type',
      tableName: 'type',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Type.hasMany(db.Item, { foreignKey: 'typeId', sourceKey: 'id' });
  }
};