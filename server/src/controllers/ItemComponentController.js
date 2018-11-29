const { WeaponClass } = require('../models')
const { WeaponType } = require('../models')
const { ArmorClass } = require('../models')
const { ArmorType } = require('../models')
const { ItemClass } = require('../models')

module.exports = {
  async SeedWeaponClass (item) {
    try {
      await WeaponClass.create(item)
    } catch (err) {
      console.log(err)
    }
  },

  async SeedWeaponType (item) {
    try {
      await WeaponType.create(item)
    } catch (err) {
      console.log(err)
    }
  },

  async SeedArmorClass (item) {
    try {
      await ArmorClass.create(item)
    } catch (err) {
      console.log(err)
    }
  },

  async SeedArmorType (item) {
    try {
      await ArmorType.create(item)
    } catch (err) {
      console.log(err)
    }
  },

  async SeedItemClass (item) {
    try {
      await ItemClass.create(item)
    } catch (err) {
      console.log(err)
    }
  }
}
