// todo - declare variables
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('express-flash');
const logger = require('morgan');

//*import functions/routes
require('./config/passport')(passport);
const connectDB = require('./config/database');
require('dotenv').config({ path: './config/.env' });

//todo - connect to database
connectDB();

//todo - set middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // url parser - help validate the information that we are passing back and forth
// extended true allows us to pass arrays

//todo - set session
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ 
        client: mongoose.connection.getClient()}),
    })
  )

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


//todo - set routes
const homeRoutes = require('./routes/home');


//todo - start server
app.listen(PORT, () => {
  console.log('Server is running, better go catch it!');
});
