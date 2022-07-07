const { resCodes } = require('../constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = resCodes.FORBIDDEN;
  }
}

module.exports = ForbiddenError;
