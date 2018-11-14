// API endpoints file
const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

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
}; // eslint-disable-line
