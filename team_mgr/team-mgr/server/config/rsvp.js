const router = require('express').Router();
const rsvpController = require('../controllers/rsvps');

module.exports = router
    .get('/', rsvpController.index)
    .get('/:id', rsvpController.show)
    .post('/', rsvpController.create)
    .put('/:id', rsvpController.update)
    .delete('/:id', rsvpController.destroy);
