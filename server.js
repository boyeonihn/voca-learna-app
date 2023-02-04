// todo - declare variables
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const passport = require('passport');
// const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const logger = require('morgan');

//*import functions/routes
require('./config/passport')(passport);
//todo - connect to database

//todo - set middleware
app.set('view engine', 'ejs');
app.set(express.static('public'));
app.use(express.urlencoded({ extended: true })); // url parser - help validate the information that we are passing back and forth
// extended true allows us to pass arrays

app.use(passport.initialize());
// app.use(passport.session());
app.use(flash()); 

//todo - set routes

//todo - start server
app.listen(PORT, () => {
  console.log('Server is running, better go catch it!');
});
