const Sequelize = require('sequelize');
const db = require('../db');

//Model for the type of armor
const ArmorClass = db.define('ArmorClass', {
  name: Sequelize.STRING
});

module.exports = ArmorClass;
