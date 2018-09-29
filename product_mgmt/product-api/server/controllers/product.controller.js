const Product = require('mongoose').model('Product');
const errorHandler = require('./concerns/error-handler');

/* these make use of mongoose methods sich as findById:
http://mongoosejs.com/docs/api.html#model_Model.findById
*/
module.exports = {
  index(request, response) {
    Product.find(request.body)
      .then(products => response.json(products))
      .catch(errorHandler.bind(response));
  },
  show(request, response) {
    Product.findById(request.params.id)
      .then(product => response.json(product))
      .catch(errorHandler.bind(response));
  },
  create(request, response) {
    //delete request.body._id;
    //console.log(request.body);
    Product.create(request.body)
      .then(product => response.json(product))
      .catch(errorHandler.bind(response));
  },
  update(request, response) {
    Product.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(product => response.json(product))
      .catch(errorHandler.bind(response));
  },
  destroy(request, response) {
    Product.findByIdAndRemove(request.params.id)
      .then(product => response.json(product))
      .catch(errorHandler.bind(response));
  },
}
