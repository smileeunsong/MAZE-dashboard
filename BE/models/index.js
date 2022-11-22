const redis = require('redis');
const client = redis.createClient();

const Sequelize = require('sequelize');
const User = require('./user');
const Store = require('./store');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

db.sequelize = sequelize;
db.client = client;

db.User = User;
db.Store = Store;

User.init(sequelize);
Store.init(sequelize);

User.associate(db);
Store.associate(db);

module.exports = db