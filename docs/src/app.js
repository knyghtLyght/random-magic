// Server insertion point
const express = require('express'); // Core server framework
const bodyParser = require('body-parser'); // Allows for easier JSON convertion
const cors = require('cors'); // Cross origin resource sharing
const morgan = require('morgan'); // logging plugin for easier debugging and log managment
const { sequelize } = require('./models'); // ORM for code first SQL managment
const config = require('./config/config'); // Config file for protected server side variables
const SeedController = require('./controllers/SeedController'); // Used to seed the db withinital data

// Init out express instance
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// pull in our endpoints
require('./routes')(app);
