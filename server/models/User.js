// Setup our user data model for sequelize
const Promise = require('bluebird'); // Promise library
// Import our Crypto package and use Bluebirds promisifyAll
// to craete Async versions of all the methods. this lets us chain .then
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const Sequelize = require('sequelize');
const db = require('../db');

// Hash callback function so the password is not stored in plain text
function hashPassword(user, options) {
  const SALT_FACTOR = 8; // Salt option for bcrypt, determins strength of the hash
  // If there is no change to the password we do not need to rehash it
  if (!user.changed('password')) {
    return;
  }
  // Use bcrypt to hash and replace the password
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash);
    });
}

const User = db.define(
  'User',
  {
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: Sequelize.STRING,
    role: Sequelize.STRING
  },
  {
    hooks: {
      // Before this db object is saved run hashPssword
      beforeSave: hashPassword
    }
  }
);
// Check password function accesable for all User objects
User.prototype.comparePassword = function(password) {
  console.log(password, this.password);
  return bcrypt.compareAsync(password, this.password);
};

module.exports = User;
