const Sequelize = require('sequelize');
const db = require('../db');

//Model for the type of armor
const Item = db.define('Item', {
  level: Sequelize.INTEGER,
  name: Sequelize.STRING,
  rarity: Sequelize.STRING,
  effect: Sequelize.JSON,
  flavor: Sequelize.TEXT
});

module.exports = Item;
