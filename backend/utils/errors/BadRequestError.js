const { resCodes } = require('../constants');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = resCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
