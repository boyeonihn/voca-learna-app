exports.getIndex = (req, res) => {
  try {
    if (req.user) {
      return res.redirect('/dashboard');
    }
    res.render('index.ejs');
  } catch (err) {
    if (err) return res.status(500).send(err);
  }
};

exports.getDashboard = (req, res) => {
  console.log('####', req.user._id, req.user.username);

  const username = req.user.username;
  const userId = req.user._id;

  try {
    res.render('dashboard.ejs', {
      username: username,
    });
  } catch (err) {
    if (err) return res.status(500).send(err);
  }
};
