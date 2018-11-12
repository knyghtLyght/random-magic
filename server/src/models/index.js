const fs = require('fs') // Node.js file system acess
const path = require('path') // Node.js file path managment
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

// setup our models to import into sequelize
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })
// variables to give us access to both sequelize objects
db.sequelize = sequelize
db.Sequelize = Sequelize

// Export the db object
module.exports = db
