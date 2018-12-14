// Express middleware for data validation
const Joi = require('joi'); // Data validation module

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$')),
      role: Joi.string()
    };
    const { error, value } = Joi.validate(req.body, schema); // eslint-disable-line
    // Error and validation hadneling
    if (error) {
      switch (error.details[0].context.key) {
      case 'email':
        res.status(400).send({
          error: 'You must provide a valid email address'
        });
          break; // eslint-disable-line
      case 'password':
        res.status(400).send({
          error: 'Your password is invalid'
        });
          break; // eslint-disable-line
      default:
        res.status(400).send({
          error: 'Invalid registration information'
        });
      }
    } else {
      next();
    }
  }
};
