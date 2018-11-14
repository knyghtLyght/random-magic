// Setup our user data model for sequelize
const Promise = require('bluebird') // Promise library
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs')) // Crypto package

// Hash callback function so the password is not stored in plain text
function hashPassword (user, options) {
  const SALT_FACTOR = 8 // Salt option for bcrypt, determins strength of the hash
  // If there is no change to the password we do not need to rehash it
  if (!user.changed('password')) {
    return
  }
  // Use bcrypt to hash and replace the password
  return bcrypt
    .genSaltSync(SALT_FACTOR)
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
      password: DataTypes.STRING
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    }
  )
  // Check password
  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }; // eslint-disable-line

  return User
}; // eslint-disable-line
