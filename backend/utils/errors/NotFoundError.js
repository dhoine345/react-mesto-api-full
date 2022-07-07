const { resCodes } = require('../constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = resCodes.NOT_FOUND_ERROR;
  }
}

module.exports = NotFoundError;
