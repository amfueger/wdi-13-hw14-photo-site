const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');
//declare controllers
const photosController = require('./controllers/photos');
const photographersController = require ('./controllers/photographers');
//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
//controllers added
app.use('/photos', photosController);
app.use('/photographers', photographersController);
//hey listen
app.listen(3000, () => {
  console.log('listening on port 3000');
})

