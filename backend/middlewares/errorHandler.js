const { resCodes, errorMessages } = require('./utils/constants');

module.exports = ((err, req, res, next) => {
  const { statusCode = resCodes.INTERNAL_SERVER_ERROR, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === resCodes.INTERVAL_SERVER_ERROR
        ? errorMessages.server
        : message,
    });
  next();
});
