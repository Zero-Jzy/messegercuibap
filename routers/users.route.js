const express = require('express');
var controller = require('../controllers/user.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/register', controller.register);

router.post('/register', controller.postRegister);

router.get('/login', controller.login);

// router.post('/login', controller.postLogin);


module.exports = router;