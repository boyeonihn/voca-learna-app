// module.exports = {
//     getIndex: (req, res) => {
//       try {
//         res.render('index.ejs');
//       } catch (err) {
//         if (err) return res.status(500).send(err);
//       }
//     },
//   };
  

exports.getIndex = (req, res) => {
    console.log('####', req.user._id);

    try {
        res.render('index.ejs');
      } catch (err) {
        if (err) return res.status(500).send(err);
      }
};