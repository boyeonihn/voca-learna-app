// module.exports = {
//   ensureAuth: function (req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     } else {
//       res.redirect('/');
//     }
//   },
// };

module.exports = (req, res, next) => {
  if (!req.user) {
    res.redirect('/login');
    return;
  }
  next();
};
