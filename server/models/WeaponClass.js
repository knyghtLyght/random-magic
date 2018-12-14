const Sequelize = require('sequelize');
const db = require('../db');

//Model for the type of armor
const WeaponClass = db.define('WeaponClass', {
  name: Sequelize.STRING
});

module.exports = WeaponClass;
