var Game = require('mongoose').model('Game');
const errorHandler = require('./error-handler');

module.exports = { 
    index(request, response){
        console.log('index request', request.body);
        Game.find(request.body)
            .then(games => response.json(games))
            .catch(errorHandler.bind(response))
    }, 
    show(request, response){
        Game.findById(request.params.id)
            .then(game => response.json(game))
            .catch(errorHandler.bind(response))
    },
    create(request, response){
        console.log('request body', request.body);
        Game.create(request.body)
            .then(game => response.json(game))
            .catch(errorHandler.bind(response))
    },
    update(request, response) {
        Game.findByIdAndUpdate(request.params.id, request.body, { new: true })
            .then(game => response.json(game))
            .catch(errorHandler.bind(response));
    },
    destroy(request, response) {
        Game.findByIdAndRemove(request.params.id)
            .then(game => response.json(game))
            .catch(errorHandler.bind(response));
    },
}