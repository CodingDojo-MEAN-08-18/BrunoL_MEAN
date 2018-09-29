module.exports = function(errors) {
  console.log('errors', errors)
  if (errors.errors) {
    errors = Object.keys(errors.errors)
                .map(field => errors.errors[field].message);
  } else if (typeof errors === 'string') {
    errors = [errors];
  } else if (errors.message) {
    errors = [errors.message];
  }

  this.status(422).json(errors);
};
