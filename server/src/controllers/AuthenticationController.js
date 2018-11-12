const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      // error handling
      // Email is set UNIQUE in our db so a falure here is a result of the email
      res.status(400).send({
        error: 'this email account is already in use'
      })
    }
  }
}
