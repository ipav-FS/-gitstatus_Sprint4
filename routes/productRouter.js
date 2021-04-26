const express = require('express');

const router = express.Router();

const controller = require('../controller/productController');




router.get('/create', controller.create);

router.get('/cart', controller.cart);

router.get('/:id/edit', controller.edit);

router.get('/:id', controller.show);

router.get('/search', controller.search);

router.put('/:id', controller.update);

router.post('/store', controller.store);

router.delete('/:id', controller.destroy);

module.exports = router;