/*var Player = require('mongoose').model('Player');
var Game = require('mongoose').model('Game');*/ // not sure if needed
var Rsvp = require('mongoose').model('Rsvp');
const errorHandler = require('./error-handler');

// request should contain the game Id and rsvp Id, and then rsvp status
module.exports = { 
    index(request, response){
        console.log('index request', request.body);
        Rsvp.find(request.body)
            .then(rsvps => response.json(rsvps))
            .catch(errorHandler.bind(response))
    }, 
    show(request, response){
        Rsvp.findById(request.params.id)
            .then(rsvp => response.json(rsvp))
            .catch(errorHandler.bind(response))
    },
    create(request, response){
        console.log('request body', request.body);
        Rsvp.create(request.body)
            .then(rsvp => response.json(rsvp))
            .catch(errorHandler.bind(response))
    },
    update(request, response) {
        Rsvp.findByIdAndUpdate(request.params.id, request.body, { new: true })
            .then(rsvp => response.json(rsvp))
            .catch(errorHandler.bind(response));
    },
    destroy(request, response) {
        Rsvp.findByIdAndRemove(request.params.id)
            .then(rsvp => response.json(rsvp))
            .catch(errorHandler.bind(response));
    },
}