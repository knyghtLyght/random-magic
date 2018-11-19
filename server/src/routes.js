// API endpoints file
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ItemsController = require('./controllers/ItemsController')

module.exports = app => {
  // Server status endpoint
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world!'
    })
  })
  // User registraion endpoint
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
  // User login endpoint
  app.post('/login', AuthenticationController.login)
  // Get all items in the db
  app.get('/items', ItemsController.index)
  // Add an item to the db
  app.post('/items', ItemsController.post)
}; // eslint-disable-line
