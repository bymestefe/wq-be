const ApiResponseHelper = {
  success: (res, data = null, message = 'Success') => {
    return res.status(200).json({
      status: 'success',
      message,
      data,
    });
  },

  created: (res, data = null, message = 'Resource created successfully') => {
    return res.status(201).json({
      status: 'success',
      message,
      data,
    });
  },

  validationError: (res, errors) => {
    errors = errors.replace(/"/g, '');
    return res.status(422).json({
      status: 'fail',
      message: 'Validation error',
      errors,
    });
  },

  notFound: (res, message = 'Resource not found') => {
    return res.status(404).json({
      status: 'fail',
      message,
    });
  },

  error: (res, message = 'Internal Server Error', status = 500, errors = null) => {
    return res.status(status).json({
      status: 'error',
      message,
      errors,
    });
  },

  conflict: (res, message = 'Conflict', errors = null) => {
    return res.status(409).json({
      status: 'fail',
      message,
      errors,
    });
  },

  unauthorized : (res, message) => {
    return res.status(401).json({
        status: 'fail',
        message: message || 'Unauthorized',
    });
  },
  
  forbidden: (res, message = 'Forbidden', errors = null) => {
    return res.status(403).json({
      status: 'fail',
      message,
      errors,
    });
  },
  
};

module.exports = ApiResponseHelper;
