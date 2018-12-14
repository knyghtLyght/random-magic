const Sequelize = require('sequelize');
const db = require('../db');

//Model for the type of armor
const WeaponType = db.define('WeaponType', {
  name: Sequelize.STRING
});

module.exports = WeaponType;
