const Sequelize = require('sequelize');
const config = require('./config/config'); //config file for incresed modularity

const db = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

module.exports = db;

const User = require('./models/User');
const ArmorClass = require('./models/ArmorClass');
const ArmorType = require('./models/ArmorType');
const Item = require('./models/Item');
const ItemClass = require('./models/ItemClass');
const WeaponClass = require('./models/WeaponClass');
const WeaponType = require('./models/WeaponType');
const Effect = require('./models/Effect');

//Each item has a created by user
Item.belongsTo(User);
//Each item belongs to one item class
Item.belongsTo(ItemClass);
//Each item can belong to many Weapon classes
Item.belongsToMany(WeaponClass, { through: 'itemAssociations' });
//Each item can belong to many Weapon types
Item.belongsToMany(WeaponType, { through: 'itemAssociations' });
//Each Item can belong to many Armor Classes
Item.belongsToMany(ArmorClass, { through: 'itemAssociations' });
//Each Item can belong to manu Armor types
Item.belongsToMany(ArmorType, { through: 'itemAssociations' });
Item.belongsToMany(Effect, { through: 'itemAssociations' });
