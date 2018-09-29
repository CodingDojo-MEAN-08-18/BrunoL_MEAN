const router = require('express').Router();
const gameController = require('../controllers/games');

module.exports = router
    .get('/', gameController.index)
    .get('/:id', gameController.show)
    .post('/', gameController.create)
    .put('/:id', gameController.update)
    .delete('/:id', gameController.destroy);
