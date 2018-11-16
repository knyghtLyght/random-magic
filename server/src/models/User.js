// Setup our user data model for sequelize
const Promise = require('bluebird') // Promise library
// Import our Crypto package and use Bluebirds promisifyAll...
// to craete Async versions of all the methods. this lets us chain .thens
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// Hash callback function so the password is not stored in plain text
function hashPassword (user, options) {
  const SALT_FACTOR = 8 // Salt option for bcrypt, determins strength of the hash
  // If there is no change to the password we do not need to rehash it
  if (!user.changed('password')) {
    return
  }
  // Use bcrypt to hash and replace the password
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {
      hooks: {
        // beforeCreate: hashPassword,
        // beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    }
  )
  // Check password function accesable for all User objects
  User.prototype.comparePassword = function (password) {
    console.log(password, this.password)
    return bcrypt.compareAsync(password, this.password)
  }; // eslint-disable-line

  return User
}; // eslint-disable-line
