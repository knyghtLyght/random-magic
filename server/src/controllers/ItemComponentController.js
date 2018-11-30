const { WeaponClass } = require('../models')
const { WeaponType } = require('../models')
const { ArmorClass } = require('../models')
const { ArmorType } = require('../models')
const { ItemClass } = require('../models')
const { Tag } = require('../models')

module.exports = {
  async seedWeaponClass (item) {
    try {
      await WeaponClass.create(item)
    } catch (err) {
      console.log(err)
    }
  },

  async seedWeaponType (item) {
    try {
      await WeaponType.create(item)
    } catch (err) {
      console.log(err)
    }
  },

  async seedArmorClass (item) {
    try {
      await ArmorClass.create(item)
    } catch (err) {
      console.log(err)
    }
  },

  async seedArmorType (item) {
    try {
      await ArmorType.create(item)
    } catch (err) {
      console.log(err)
    }
  },

  async seedItemClass (item) {
    try {
      await ItemClass.create(item)
    } catch (err) {
      console.log(err)
    }
  },

  async seedTags (item) {
    try {
      await Tag.create(item)
    } catch (err) {
      console.log(err)
    }
  }
}
