// Handles initial GET request for the homepage
// as well as requests for login, signup, and logout

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const homeController = require('../controllers/home');

router.get('/', homeController.getIndex); // read request'
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout);

router.get('signup', authController.getSignup);
router.post('/signup', authController.postSignup);

module.exports = router;
