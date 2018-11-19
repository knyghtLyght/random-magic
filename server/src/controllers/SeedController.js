const AuthenticationController = require('./AuthenticationController')
const ItemsController = require('./ItemsController')
const UserSeed = require('../config/UserSeed')
const ItemSeed = require('../config/ItemSeed')

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
  }
}
