const AuthenticationController = require('./AuthenticationController')
const ItemsController = require('./ItemsController')
const ItemComponentController = require('./ItemComponentController')
const UserSeed = require('../config/UserSeed')
const ItemSeed = require('../config/ItemSeed')
const ItemComponentSeed = require('../config/ItemComponentSeed')

module.exports = {
  seedUsers () {
    UserSeed.users.forEach(element => {
      AuthenticationController.seedUser(element)
    })
    console.log('admin seed compete')
  },
  seedItems () {
    ItemSeed.items.forEach(element => {
      ItemsController.seedItem(element)
    })
    console.log('item seed complete')
  },
  seedTags () {
    ItemComponentSeed.tags.forEach(element => {
      ItemComponentController.seedTags(element)
    })
  },
  seedWeaponClass () {
    ItemComponentSeed.weaponClasses.forEach(element => {
      ItemComponentController.seedWeaponClass(element)
    })
  },
  seedWeaponType () {
    ItemComponentSeed.weaponTypes.forEach(element => {
      ItemComponentController.seedWeaponType(element)
    })
  },
  seedArmorType () {
    ItemComponentSeed.armorClasses.forEach(element => {
      ItemComponentController.seedArmorType(element)
    })
  }
}
