// Bluebird allows us to Promis.map
const Promise = require('bluebird');
//Colors lets us make logging more readable by adding colored output
const colors = require("colors"); // eslint-disable-line
//Bring in the db and all the models to seed
const db = require('./db');
//Pull in models
const User = require('./models/User');
const Item = require('./models/Item');
const ItemClass = require('./models/ItemClass');
const WeaponClass = require('./models/WeaponClass');
const ArmorClass = require('./models/ArmorClass');
const WeaponType = require('./models/WeaponType');

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

const itemClassData = [
  {
    name: 'Weapon'
  },
  {
    name: 'Armor'
  },
  {
    name: 'Wondrous Item'
  }
];

const weaponClassData = [
  {
    name: 'Melee'
  },
  {
    name: 'Ranged'
  }
];

const armorClassData = [
  {
    name: 'Body'
  },
  {
    name: 'Helm'
  },
  {
    name: 'Cloak'
  },
  {
    name: 'Necklace'
  },
  {
    name: 'Ring'
  },
  {
    name: 'Gloves'
  },
  {
    name: 'Shield'
  },
  {
    name: 'Belt'
  },
  {
    name: 'Boots'
  }
];

const weaponTypeData = [
  {
    name: 'Club'
  },
  {
    name: 'Dagger'
  },
  {
    name: 'Greatclub'
  },
  {
    name: 'Handaxe'
  },
  {
    name: 'Javalin'
  },
  {
    name: 'Hammer, Light'
  },
  {
    name: 'Mace'
  },
  {
    name: 'Quarterstaff'
  },
  {
    name: 'Sickle'
  },
  {
    name: 'Spear'
  },
  {
    name: 'Crossbow, Light'
  },
  {
    name: 'Dart'
  },
  {
    name: 'Shortbow'
  },
  {
    name: 'Sling'
  },
  {
    name: 'Battleaxe'
  },
  {
    name: 'Flail'
  },
  {
    name: 'Glave'
  },
  {
    name: 'Greataxe'
  },
  {
    name: 'Greatsword'
  },
  {
    name: 'Halberd'
  },
  {
    name: 'Lance'
  },
  {
    name: 'Longsword'
  },
  {
    name: 'Maul'
  },
  {
    name: 'Morningstar'
  },
  {
    name: 'Pike'
  },
  {
    name: 'Rapier'
  },
  {
    name: 'Scimitar'
  },
  {
    name: 'Shortsword'
  },
  {
    name: 'Trident'
  },
  {
    name: 'War Pick'
  },
  {
    name: 'Warhammer'
  },
  {
    name: 'Whip'
  },
  {
    name: 'Blowgun'
  },
  {
    name: 'Crossbow, Hand'
  },
  {
    name: 'Crossbow, Heavy'
  },
  {
    name: 'Longbow'
  },
  {
    name: 'Net'
  }
];

const armorTypeData = [
  {
    name: 'Padded'
  },
  {
    name: 'Leather'
  },
  {
    name: 'Studded'
  },
  {
    name: 'HIde'
  },
  {
    name: 'Chain Shirt'
  },
  {
    name: 'Scalemail'
  },
  {
    name: 'Breastplate'
  },
  {
    name: 'Half-Plate'
  },
  {
    name: 'Ringmail'
  },
  {
    name: 'Chainmail'
  },
  {
    name: 'Splint'
  },
  {
    name: 'Plate'
  },
  {
    name: 'Shiled'
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
  //Seed Item Classes
  .then(() => {
    return Promise.map(itemClassData, function(itemClass) {
      return ItemClass.create(itemClass);
    });
  })
  .then(createdItemClass => {
    console.log(`${createdItemClass.length} Item Classes created`.green);
  })
  //Seed weapon classes
  .then(() => {
    return Promise.map(weaponClassData, function(weaponClass) {
      return WeaponClass.create(weaponClass);
    });
  })
  .then(createdWeaponClass => {
    console.log(`${createdWeaponClass.length} Weapon Classes created`.green);
  })
  //Seed Armor classes
  .then(() => {
    return Promise.map(armorClassData, function(armorCLass) {
      return ArmorClass.create(armorCLass);
    });
  })
  .then(createdArmorClass => {
    console.log(`${createdArmorClass.length} Armor Classes created`.green);
  })
  //Seed weapon Types
  .then(() => {
    return Promise.map(weaponTypeData, function(weaponType) {
      return WeaponType.create(weaponType);
    });
  })
  .then(createdWeaponType => {
    console.log(`${createdWeaponType.length} Weapon Types created`.green);
  })
  //seed Armor Types
  .then(() => {
    return Promise.map(armorTypeData, function(armorType) {
      return WeaponType.create(armorType);
    });
  })
  .then(createdArmorType => {
    console.log(`${createdArmorType.length} Armor Types created`.green);
  })
  //Seed offical items
  .then(() => {
    Item.create({
      level: 3,
      name: 'Adamantine Armor',
      rarity: 'uncommon',
      flavor:
        'This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you\'re wearing it critical hit against you becomes a normal hit. - DMG p150'
    });
  });
