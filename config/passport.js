const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const crypto = require('crypto');
const User = require('../models/User');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(function verify(username, password, cb) {
      User.findOne({ username: username.toLowerCase() }, function (err, user) {
        if (err) {
          return cb(err);
        }
        if (!user) {
          return cb(null, false, {
            message: `username/email ${username} not found`,
          });
        }

        crypto.pbkdf2(
          password,
          process.env.CRYPTO_SALT,
          310000,
          32,
          'sha256',
          function (err, hashedPassword) {
            if (err) {
              return cb(err);
            }

            if (user.hashedPassword !== hashedPassword.toString('hex')) {
              return cb(null, false, {
                message: 'Incorrect username or password.',
              });
            }
            return cb(null, user);
          }
        );
      });
    })
  );
};
