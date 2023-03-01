exports.getAllLists = (req, res) => {
  console.log('Getting all lists', req.user._id, req.user.username);
  const username = req.user.username;
  const userId = req.user._id;

  res.render('allLists.ejs', {
    username: username,
    title: 'All Vocabulary Lists',
  });
};

exports.getCreateList = (req, res) => {
  console.log('####', req.user._id, req.user.username);

  const username = req.user.username;
  const userId = req.user._id;

  res.render('createList.ejs', {
    username: username,
    title: 'Create Vocabulary List',
  });
};
