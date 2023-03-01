const express = require('express');
const router = express.Router();
const vocabularyListController = require('../controllers/vocabularyList');

router.get('/allLists', vocabularyListController.getAllLists);
router.get('/createList', vocabularyListController.getCreateList);
// router.post('/createList', vocabularyListController.postCreateList);

module.exports = router;
