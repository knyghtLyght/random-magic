// Bluebird allows us to Promis.map
const Promise = require('bluebird');
//Colors lets us make logging more readable by adding colored output
const colors = require("colors"); // eslint-disable-line
//Bring in the db and all the models to seed
const db = require('./db');

const User = require('./models/user');

const userData = [
  {
    email: 'admin@admin.com',
    password: '123456789',
    role: 'admin'
  },
  {
    email: 'test@test.com',
    password: '123456789',
    role: ''
  },
  {
    email: 'member@member.com',
    password: '123456789',
    role: ''
  }
];

//Sync and restart the db before seeding
db.sync({ force: true })
  .then(() => {
    console.log('Synced db and dropped old tables'.yellow);
  })
  .then(() => {
    return Promise.map(userData, function(user) {
      return User.create(user);
    });
  })
  .then(createdUsers => {
    console.log(`${createdUsers.length} Users created`.green);
  });
