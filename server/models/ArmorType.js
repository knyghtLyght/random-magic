const Sequelize = require('sequelize');
const db = require('../db');

//Model for the type of body armor
const ArmorType = db.define('ArmorType', {
  name: Sequelize.STRING
});

module.exports = ArmorType;
