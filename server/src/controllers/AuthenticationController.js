const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// Helper function to sign user object and return jwt token
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7 // 60 seconds x 60 min x 24 hours x 7 days
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body) // Create a user db object and populate it with the info from body
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (error) {
      console.log(error)
      // error handling
      // Email is set UNIQUE in our db so a falure here is a result of the email
      res.status(400).send({
        error: 'this email account is already in use'
      })
    }
  },

  async login (req, res) {
    try {
      const { email, password } = req.body
      // Find the user by email
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      // If the user was not found in the db
      if (!user) {
        return res.status(403).send({
          error: 'The login information dose not match an existing user'
        })
      }
      // Handle password validation
      const isPassValid = await user.comparePassword(password)
      if (!isPassValid) {
        return res.status(403).send({
          error: 'The password was incorect'
        })
      }
      // Convert our user object int JSON and send back the auth token with it
      const userJson = user.toJSON()
      console.log()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      console.log(err)
      // Generic error handling
      res.status(500).send({
        error: 'there was an error in the login process'
      })
    }
  }
}
