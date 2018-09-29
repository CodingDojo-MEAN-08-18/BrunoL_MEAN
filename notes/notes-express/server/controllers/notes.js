var Note = require('mongoose').model('Note');
const errorHandler = require('./error-handler');

module.exports = { 
    index(request, response){
        console.log('index request', request.body);
        Note.find(request.body).sort('-createdAt')
            .then(notes => response.json(notes))
            .catch(errorHandler.bind(response))
    }, 
    show(request, response){
        Note.findById(request.params.id)
            .then(note => response.json(note))
            .catch(errorHandler.bind(response))
    },
    create(request, response){
        console.log('request body', request.body);
        Note.create(request.body)
            .then(note => response.json(note))
            .catch(errorHandler.bind(response))
    },
    update(request, response) {
        Note.findByIdAndUpdate(request.params.id, request.body, { new: true })
            .then(note => response.json(note))
            .catch(errorHandler.bind(response));
    },
    destroy(request, response) {
        Note.findByIdAndRemove(request.params.id)
            .then(note => response.json(note))
            .catch(errorHandler.bind(response));
    },
}