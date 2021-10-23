const ErrorResponse = require('../utils/ErrorResponse');
const errorHandler = (err, req, res, next) => {
  let errors = { ...err };
  errors.message = err.message;

  if (err.name === 'ValidationError') {
    const messages = Object.values(errors.message).map(
      (value) => value.message
    );
    errors = new ErrorResponse(messages, 400);
  }
  res.status(errors.statusCode || 500).json({
    success: false,
    message: errors.message,
  });
  next();
};
module.exports = errorHandler;
