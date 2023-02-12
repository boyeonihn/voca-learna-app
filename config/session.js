const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo'); 

module.exports = function (passport, app) {
  //todo - set session
  app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        client: mongoose.connection.getClient(),
      }),
    })
  );

  app.use(passport.authenticate('session'));

  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      cb(null, { _id: user._id, username: user.username });
    });
  });

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
};
