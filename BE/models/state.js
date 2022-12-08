const Sequelize = require('sequelize');

module.exports = class State extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(100),
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'State',
      tableName: 'state',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.State.hasMany(db.Order, { foreignKey: 'stateId', sourceKey: 'id' });
  }
};
