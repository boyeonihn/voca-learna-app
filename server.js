// todo - declare variables
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const passport = require('passport');
const flash = require('express-flash');
const logger = require('morgan');

//*import functions/routes
const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard');
const ensureLoggedIn = require('./middleware/auth');
const vocabularyListRouter = require('./routes/vocabularyList');

//connect to database
const connectDB = require('./config/database');
require('dotenv').config({ path: './config/.env' });
connectDB();

// configure passport
const configurePassport = require('./config/passport');
configurePassport(passport);
const configureSession = require('./config/session');
configureSession(passport, app);

//todo - set middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // url parser - help validate the information that we are passing back and forth
// extended true allows us to pass arrays
app.use(express.json());

// app.use(flash());

//todo - set routes
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/dashboard', ensureLoggedIn, dashboardRouter);
app.use('/vocabList', ensureLoggedIn, vocabularyListRouter);

//todo - start server
app.listen(PORT, () => {
  console.log('Server is running, better go catch it!');
});
