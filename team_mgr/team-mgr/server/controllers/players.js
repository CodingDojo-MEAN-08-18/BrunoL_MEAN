var Player = require('mongoose').model('Player');
const errorHandler = require('./error-handler');

module.exports = { 
    index(request, response){
        console.log('player index request', request.body);
        Player.find(request.body).sort("name")
            .then(players => response.json(players))
            .catch(errorHandler.bind(response))
    }, 
    show(request, response){
        Player.findById(request.params.id)
            .then(player => response.json(player))
            .catch(errorHandler.bind(response))
    },
    create(request, response){
        console.log('request body', request.body);
        Player.create(request.body)
            .then(player => response.json(player))
            .catch(errorHandler.bind(response))
    },
    update(request, response) {
        Player.findByIdAndUpdate(request.params.id, request.body, { new: true })
            .then(player => response.json(player))
            .catch(errorHandler.bind(response));
    },
    destroy(request, response) {
        Player.findByIdAndRemove(request.params.id)
            .then(player => response.json(player))
            .catch(errorHandler.bind(response));
    },
}