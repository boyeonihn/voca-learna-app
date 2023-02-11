// todo - declare variables
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const passport = require('passport');
const flash = require('express-flash');
const logger = require('morgan');

//*import functions/routes
const authRouter = require('./routes/auth');
const connectDB = require('./config/database');
require('dotenv').config({ path: './config/.env' });
connectDB();
const configurePassport = require('./config/passport');
configurePassport(passport);
const configureSession = require('./config/session');
configureSession(passport, app); 

//todo - connect to database


//todo - set middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // url parser - help validate the information that we are passing back and forth
// extended true allows us to pass arrays
app.use(express.json()); 


// 
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

//todo - set routes
app.use('/', authRouter);

//todo - start server
app.listen(PORT, () => {
  console.log('Server is running, better go catch it!');
});
