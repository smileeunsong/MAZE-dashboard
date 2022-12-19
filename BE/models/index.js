const redis = require('redis');
const client = redis.createClient();

const Sequelize = require('sequelize');
const User = require('./user');
const Store = require('./store');
const Order = require('./order');
const State = require('./state');
const Item = require('./item');
const Type = require('./type');
const Option = require('./option');


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
db.State = State;
db.Type = Type;
db.Item = Item;
db.Option = Option;
db.Order = Order;

User.init(sequelize);
Store.init(sequelize);
State.init(sequelize);
Type.init(sequelize);
Item.init(sequelize);
Option.init(sequelize);
Order.init(sequelize);

User.associate(db);
Store.associate(db);
State.associate(db);
Type.associate(db);
Item.associate(db);
Option.associate(db);
Order.associate(db);

module.exports = db