const respHelper = require('../utils/responseHelper');

const validate = (schema) => (req, res, next) => {
    const { value, error } = schema.validate(req.body);
    if (error) {
      const errorMessage = error.details?.map(detail => detail.message).join(', ');
      const errorResponse = respHelper.validationError(res, errorMessage);
      errorResponse;
    } else {
      Object.assign(req, value);
      return next();
    }
  }
  
  module.exports = validate;