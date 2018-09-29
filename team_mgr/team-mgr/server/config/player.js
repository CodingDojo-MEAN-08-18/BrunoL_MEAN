const router = require('express').Router();
const playerController = require('../controllers/players');

module.exports = router
    .get('/', playerController.index)
    .get('/:id', playerController.show)
    .post('/', playerController.create)
    .put('/:id', playerController.update)
    .delete('/:id', playerController.destroy);
