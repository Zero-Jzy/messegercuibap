const express = require('express');
var controller = require('../controllers/product.controller');

var router = express.Router();


router.get('/', controller.index);

router.get('/details', controller.details);

router.get('/create', controller.create);

router.post('/create', controller.postCreate);

router.get('/:id', controller.detail);

router.post('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;