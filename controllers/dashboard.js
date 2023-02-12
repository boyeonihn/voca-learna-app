exports.getDashboard = (req, res) => {
  console.log('####', req.user._id, req.user.username);

  const username = req.user.username;
  const userId = req.user._id;

  res.render('dashboard.ejs', {
    username: username,
  });
};
