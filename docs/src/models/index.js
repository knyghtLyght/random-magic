const Sequelize = require('sequelize') // ORM for conecting to SQL databases
const config = require('../config/config') // our local config file
const db = {}

// Init our sequelize instance using our config file
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// variables to give us access to both sequelize objects
db.sequelize = sequelize
db.Sequelize = Sequelize

// Export the db object
module.exports = db

var Item = require('./Item')
var ItemClass = require('./ItemClass')

Item.belongsTo(ItemClass)
