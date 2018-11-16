const { Item } = require('../models')

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
  async post (req, res) {
    try {
      const item = await Item.create(req.body)
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'An error occered creating your item'
      })
    }
  }
}
