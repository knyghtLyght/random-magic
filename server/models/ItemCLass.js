const Sequelize = require('sequelize');
const db = require('../db');

//Model for the type of armor
const ItemClass = db.define('ItemClass', {
  name: Sequelize.STRING
});

module.exports = ItemClass;
