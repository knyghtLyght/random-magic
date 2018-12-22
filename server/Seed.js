// Bluebird allows us to Promis.map
const Promise = require('bluebird');
//Colors lets us make logging more readable by adding colored output
const colors = require("colors"); // eslint-disable-line
//Bring in the db and all the models to seed
const db = require('./db');
//Pull in models
const User = require('./models/User');
const Item = require('./models/Item');
const Effect = require('./models/Effect');

//Seed data
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

const effectData = [
  {
    level: 1,
    name: 'Skilled',
    rarity: 'Common',
    description:
      'While attuned to the artifact you gain proficiency in one skill of the DM\'s choice',
    tags: ''
  }
];

const ofiicalItemData = [
  {
    level: 3,
    name: 'Adamantine Armor',
    itemClass: 'Armor',
    itemSubClass: 'Body',
    itemType:
      'Chain Shirt, Scalemail, Breastplate, Half-Plate, Ringmail, Chainmail, Splint, Plate',
    rarity: 'Uncommon',
    effect: '',
    flavor:
      'This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you\'re wearing it critical hit against you becomes a normal hit. - DMG p150',
    tags: ''
  }
];

//Sync and restart the db before seeding
db.sync({ force: true })
  .then(() => {
    console.log('Synced db and dropped old tables'.yellow);
  })
  //Seed users
  .then(() => {
    return Promise.map(userData, function(user) {
      return User.create(user);
    });
  })
  .then(createdUsers => {
    console.log(`${createdUsers.length} Users created`.green);
  })
  //Seed offical items
  .then(() => {
    return Promise.map(ofiicalItemData, function(item) {
      return Item.create(item);
    });
  })
  .then(createdItems => {
    console.log(`${createdItems.length} Items created`.green);
  })
  //Seed Effects
  .then(() => {
    return Promise.map(effectData, function(effect) {
      return Effect.create(effect);
    });
  })
  .then(createdEffects => {
    console.log(`${createdEffects.length} Effects created`.green);
  });
