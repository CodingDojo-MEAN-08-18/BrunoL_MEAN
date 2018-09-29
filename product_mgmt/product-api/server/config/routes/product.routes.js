const productController = require('../../controllers/product.controller');
const router = require('express').Router();

module.exports = router
    .get('/', productController.index)
    .get('/:id', productController.show)
    .post('/', productController.create)
    .put('/:id', productController.update)
    .delete('/:id', productController.destroy);
