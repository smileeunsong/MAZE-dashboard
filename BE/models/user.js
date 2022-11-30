const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      phone: {
        type: Sequelize.CHAR(11),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: true,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      profileImageUrl: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      kakaoId: {
        type: Sequelize.BIGINT,
        allowNull: true,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.User.belongsToMany(db.Store, { through: 'user_store' });
  }
};
