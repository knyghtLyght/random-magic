const Sequelize = require('sequelize');
const db = require('../db');

//Model for the type of armor
const Effect = db.define('effect', {
  level: Sequelize.INTEGER,
  name: Sequelize.STRING,
  rarity: Sequelize.STRING,
  description: Sequelize.TEXT
});

module.exports = Effect;
