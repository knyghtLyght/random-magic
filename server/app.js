const express = require('express'); //Core server framework
const volleyball = require('volleyball'); //Logging middleware
const colors = require("colors"); // eslint-disable-line
const config = require('./config/config'); //config file for incresed modularity
const bodyParser = require('body-parser'); //Helps us handle http requests
const cors = require('cors');
const path = require('path'); //Built in node module that handles path minipulation
const db = require('./db');
const userRouter = require('./routes/user');
const officalItemsRouter = require('./routes/officialItem');
const effectRouter = require('./routes/effect');

//Init our server instance
const app = express();
//init cross-origin resource service
app.use(cors());
//Init logging middleware
app.use(volleyball);
//Init bodyparser to handle json
app.use(bodyParser.json());
//Serve up the public folder contents for static files
app.use(express.static(path.join(__dirname, 'public')));
//Routers
app.use('/user', userRouter);
app.use('/officalItems', officalItemsRouter);
app.use('/effect', effectRouter);

//Start our server
const server = app.listen(config.port, () => {
  console.log('listening on port'.green, server.address().port);
  //Sync our database force true WILL DROP ALL TABLES every restart
  //remember to set it to false for persistence
  db.sync({ force: false }).then(() => {
    console.log('db is synced'.green);
  });
});
