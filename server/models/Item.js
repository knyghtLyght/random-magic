const Sequelize = require('sequelize');
const db = require('../db');

//Model for the type of armor
const Item = db.define('Item', {
  level: Sequelize.INTEGER,
  name: Sequelize.STRING,
  itemClass: Sequelize.STRING,
  itemSubClass: Sequelize.STRING,
  itemType: Sequelize.STRING,
  rarity: Sequelize.STRING,
  effect: Sequelize.STRING,
  flavor: Sequelize.TEXT,
  tags: Sequelize.TEXT
});

module.exports = Item;
