const router = require('express').Router();
const noteController = require('../controllers/notes');

/*
module.exports = function(app){
 
  app.get('/api', noteController.index); //(req, res, next)=>{
  app.get('/api/:id', noteController.show);
  app.post('/api', noteController.create);
  app.put('/api/:id', noteController.update);
  app.delete('/api/:id', noteController.destroy); 
}
*/

module.exports = router
    .get('/', noteController.index)
    .get('/:id', noteController.show)
    .post('/', noteController.create)
    .put('/:id', noteController.update)
    .delete('/:id', noteController.destroy);
