module.exports = {
  getIndex: (req, res) => {
    try {
      res.render('index.ejs');
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
};
