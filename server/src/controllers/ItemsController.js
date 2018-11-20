const Sequelize = require('sequelize') // ORM for conecting to SQL databases
const Op = Sequelize.Op
const { Item } = require('../models')

function querySetup (itemLevel, itemType, itemBase, itemRarity) {
  if (itemLevel === 0) itemLevel = 20
  if (itemType === "Any") itemType = "%"; // eslint-disable-line
  if (itemBase === "Any") itemBase = "%"; // eslint-disable-line
  if (itemRarity === "Any") itemRarity = "%"; // eslint-disable-line
  return { itemLevel, itemType, itemBase, itemRarity }
}

module.exports = {
  async index (req, res) {
    try {
      const items = await Item.findAll()
      res.send(items)
    } catch (err) {
      res.status(500).send({
        error: 'An error occered fetching items'
      })
    }
  },
  async singleOffical (req, res) {
    try {
      console.log(req.body)
      // Destructure the search obj
      const { itemLevel, itemType, itemBase, itemRarity } = req.body
      // Translate any "Any" into query language(%). Better handled on front end?
      const filterObj = querySetup(itemLevel, itemType, itemBase, itemRarity)
      // db query
      const items = await Item.findAll({
        where: {
          level: {
            [Op.lte]: filterObj.itemLevel
          },
          class: {
            [Op.like]: filterObj.itemType
          },
          base: {
            [Op.like]: filterObj.itemBase
          },
          rarity: {
            [Op.like]: filterObj.itemRarity
          }
        }
      })
      // Flat random no weighting
      const rand = Math.floor(Math.random() * items.length + 0)
      console.log(rand)
      const item = items[rand]
      console.log(item)
      res.send(item)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error occered fetching items'
      })
    }
  },
  async post (req, res) {
    try {
      const item = await Item.create(req.body)
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'An error occered creating your item'
      })
    }
  },
  async seedItem (item) {
    try {
      await Item.create(item)
    } catch (err) {
      console.log(err)
    }
  }
}
